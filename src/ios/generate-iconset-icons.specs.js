const { expect } = require('chai');
const generateIconsetIcons = require('./generate-iconset-icons');
const deleteIfExists = require('../utils/delete-if-exists');
const fileExists = require('../utils/file-exists');

const sourceIcon = './test/icon.png';
const darkSourceIcon = './test/darkIcon.png';

describe('generate-iconset-icons', () => {
  it('should be able to generate icons for the React Native iconset', async () => {
    const files = [
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-40x40-1x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-29x29-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-29x29-1x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/iphone-60x60-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/iphone-57x57-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/iphone-29x29-1x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/iphone-57x57-1x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/iphone-40x40-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/iphone-29x29-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-40x40-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-50x50-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-50x50-1x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-72x72-1x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-72x72-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-76x76-1x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ipad-76x76-2x.png',
      'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/ios-marketing-1024x1024-1x.png',
    ];

    //  Delete all of the files we're expecting to create, then generate them.
    await Promise.all(files.map(deleteIfExists));
    await (generateIconsetIcons(sourceIcon, 'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset'));
    const filesDoExist = await Promise.all(files.map(fileExists));
    filesDoExist.forEach((exists, index) => {
      expect(exists, `${files[index]} should be generated`).to.equal(true);
    });
  });

  describe('generate-iconset-icons', () => {
    it('should be able to generate icons for the React Native dark iconset', async () => {
      const files = [
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-20x20-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-20x20-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-20x20-3x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-20x20-3x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-29x29-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-29x29-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-29x29-3x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-29x29-3x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-38x38-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-38x38-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-38x38-3x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-38x38-3x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-40x40-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-40x40-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-40x40-3x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-40x40-3x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-60x60-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-60x60-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-60x60-3x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-60x60-3x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-64x64-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-64x64-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-64x64-3x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-64x64-3x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-68x68-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-68x68-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-76x76-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-76x76-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-83.5x83.5-2x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-83.5x83.5-2x-dark.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-1024x1024-1x.png',
        'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset/universal-1024x1024-1x-dark.png',
      ];
  
      //  Delete all of the files we're expecting to create, then generate them.
      await Promise.all(files.map(deleteIfExists));
      await (generateIconsetIcons(sourceIcon, 'test/ReactNativeIconTest/ios/ReactNativeIconTest/Images.xcassets/AppIcon.appiconset', darkSourceIcon));
      const filesDoExist = await Promise.all(files.map(fileExists));
      filesDoExist.forEach((exists, index) => {
        expect(exists, `${files[index]} should be generated`).to.equal(true);
      });
    });
  });

  it('should be able to generate icons for the Cordova iconset', async () => {
    const files = [
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-40x40-1x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-29x29-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-29x29-1x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/iphone-60x60-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/iphone-57x57-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/iphone-57x57-1x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/iphone-40x40-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/iphone-29x29-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/iphone-29x29-1x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-40x40-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-50x50-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-50x50-1x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-72x72-1x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-72x72-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-76x76-1x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ipad-76x76-2x.png',
      'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset/ios-marketing-1024x1024-1x.png',
    ];

    //  Delete all of the files we're expecting to create, then generate them.
    await Promise.all(files.map(deleteIfExists));
    await (generateIconsetIcons(sourceIcon, 'test/CordovaApp/platforms/ios/ionic_app/Images.xcassets/AppIcon.appiconset'));
    const filesDoExist = await Promise.all(files.map(fileExists));
    filesDoExist.forEach((exists, index) => {
      expect(exists, `${files[index]} should be generated`).to.equal(true);
    });
  });

  it('should be able to generate icons for the Native iconset', async () => {
    const files = [
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-40x40-1x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-29x29-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-29x29-1x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/iphone-60x60-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/iphone-57x57-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/iphone-57x57-1x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/iphone-40x40-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/iphone-29x29-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/iphone-29x29-1x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-40x40-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-50x50-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-50x50-1x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-72x72-1x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-72x72-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-76x76-1x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ipad-76x76-2x.png',
      'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset/ios-marketing-1024x1024-1x.png',
    ];

    //  Delete all of the files we're expecting to create, then generate them.
    await Promise.all(files.map(deleteIfExists));
    await (generateIconsetIcons(sourceIcon, 'test/NativeApp/ios/native_app/Assets.xcassets/AppIcon.appiconset'));
    const filesDoExist = await Promise.all(files.map(fileExists));
    filesDoExist.forEach((exists, index) => {
      expect(exists, `${files[index]} should be generated`).to.equal(true);
    });
  });
});

