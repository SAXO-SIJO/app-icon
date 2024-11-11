const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

const writeFileAsync = promisify(fs.writeFile);

const resizeImage = require("../resize/resize-image");
const baseContentsTemplate = require("./AppIcon.iconset.Contents.template.json");
const universalContentTemplate = require("./AppIcon.iconset.Contents.Universal.template.json");
const fileExists = require("../utils/file-exists");

//  Generate xCode icons given an iconset folder.
module.exports = async function generateIconSetIcons(
  sourceIcon,
  iconset,
  darkIcon
) {
  //  Build the results object.
  const results = {
    icons: [],
    contentsPath: null,
  };

  //  We've got the iconset folder. Get the contents Json.
  const contentsPath = path.join(iconset, "Contents.json");
  const contents = JSON.parse(fs.readFileSync(contentsPath, "utf8"));
  contents.images = [];

  // check if dark icon exits, if it does, build for universal, else build for default
  const doesDarkExist = await fileExists(darkIcon ?? "");

  const contentsTemplate = doesDarkExist
    ? universalContentTemplate
    : baseContentsTemplate;

  //  Generate each image in the full icon set, updating the contents.
  await Promise.all(
    contentsTemplate.images.map(async (image) => {
      const targetName = generateName(image);
      const targetPath = path.join(iconset, targetName);
      const targetScale = parseInt(image.scale.slice(0, 1), 10);
      const targetSize = image.size
        .split("x")
        .map((p) => p * targetScale)
        .join("x");

      await resizeImage(image.isDark ? darkIcon : sourceIcon, targetPath, targetSize);
     
      results.icons.push(targetName);
      contents.images.push({
        ...(image.isDark && {
          appearances: [
            {
              appearance: "luminosity",
              value: "dark",
            },
          ],
        }),
        filename: targetName,
        idiom: image.idiom,
        ...(doesDarkExist && { platform: 'ios' }),
        scale: image.scale,
        size: image.size,
      });
    })
  );

  contents.images.sort((imageA, imageB) =>
    imageA.filename.localeCompare(imageB.filename)
  );
  await writeFileAsync(contentsPath, JSON.stringify(contents, null, 2));
  results.contentsPath = contentsPath;

  return results;
};

const generateName = (image) => {
  const baseNaming = `${image.idiom}-${image.size}-${image.scale}`;
  const darkNaming = `${baseNaming}-dark`;

  const returnNaming = `${image.isDark ? darkNaming : baseNaming}.png`

  return returnNaming;
};
