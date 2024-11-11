const path = require('path');
const fs = require('fs');
const { EOL } = require('os');
const mkdirp = require('mkdirp');

const androidManifestAdaptiveIcons = require('./AndroidManifest.adaptive-icons.json');
const androidManifestAdaptiveIconsMonochrome = require('./AndroidManifest.adaptive-icons.monochrome.json');
const resizeImage = require('../resize/resize-image');

//  The XML for the ic launcher manifest.
//  eslint-disable-next-line
const icLauncherManifestXml =
    `<?xml version="1.0" encoding="utf-8"?>${EOL}`
  + `<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">${EOL}`
  + `    <background android:drawable="@mipmap/ic_launcher_background" />${EOL}`
  + `    <foreground android:drawable="@mipmap/ic_launcher_foreground" />${EOL}`
  + `</adaptive-icon>${EOL}`;

  const icLauncherMonochromeManifestXml =
    `<?xml version="1.0" encoding="utf-8"?>${EOL}`
  + `<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">${EOL}`
  + `    <background android:drawable="@mipmap/ic_launcher_background" />${EOL}`
  + `    <foreground android:drawable="@mipmap/ic_launcher_foreground" />${EOL}`
  + `    <monochrome android:drawable="@mipmap/ic_launcher_monochrome" />${EOL}`
  + `</adaptive-icon>${EOL}`;

//  Generate Android Manifest icons given a manifest file.
module.exports = async function generateManifestIcons(backgroundIcon, foregroundIcon, monochromeIcon, manifest) {
  //  Create the object we will return.
  const results = {
    icons: [],
  };

  //  We've got the manifest file, get the parent folder.
  const manifestFolder = path.dirname(manifest);

  //  We've got the right list of icons to expect
  const androidManifest = monochromeIcon ? androidManifestAdaptiveIconsMonochrome : androidManifestAdaptiveIcons;

  //  Generate each image in the full icon set, updating the contents.
  await Promise.all(androidManifest.adaptiveIcons.map(async (icon) => {
    //  Each icon lives in its own folder, so we'd better make sure that folder
    //  exists.
    const resourceFolder = path.join(manifestFolder, icon.folder);
    await mkdirp(resourceFolder);
    
    const icLauncherManifest = monochromeIcon ? icLauncherMonochromeManifestXml : icLauncherManifestXml; 
    fs.writeFileSync(path.join(resourceFolder, 'ic_launcher.xml'), icLauncherManifest, 'utf8');
    fs.writeFileSync(path.join(resourceFolder, 'ic_launcher_round.xml'), icLauncherManifest, 'utf8');

    //  If the manifest requires us to generate icons for the folder, do so.
    //  Not *every* folder has icons - for example the 'anydpi' folder will
    //  not contain icons.
    if (icon.backgroundIcon) {
      const backgroundOutput = path.join(resourceFolder, icon.backgroundIcon);
      await resizeImage(backgroundIcon, backgroundOutput, icon.size);
      results.icons.push(backgroundOutput);
    }
    if (icon.foregroundIcon) {
      const foregroundOutput = path.join(resourceFolder, icon.foregroundIcon);
      await resizeImage(foregroundIcon, foregroundOutput, icon.size);
      results.icons.push(foregroundOutput);
    }
    if (icon.monochromeIcon) {
      const monochromeOutput = path.join(resourceFolder, icon.monochromeIcon);
      await resizeImage(monochromeIcon, monochromeOutput, icon.size);
      results.icons.push(monochromeOutput);
    }

    return null;
  }));
  //  Before writing the contents file, sort the contents (otherwise
  //  they could be in a different order each time).
  results.icons.sort();
  return results;
};
