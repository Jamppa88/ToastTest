# ToastTest
React Native demonstration with Redux and React Navigation.


## Generating a non-signed APK
* Run at root directory (eq. c:\Repos\ToastTest\)
  * `react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug` 
* Then run ->
  * `cd android && gradlew assembleDebug`
* Debug apk will be available in \ToastTest\android\app\build\outputs\apk

## Starting developing React Native
Needed architectures:
* nodejs
* java development kit (jdk)
* python2
* Android Studio
* IF (iOs == target) => Use MacOS!!

First:
* mention Chocolatey
* `npm install -g react-native-cli`
* IF want to use create-react-native-app, check npm version
  * v5 has issues with create-react-native-app, use v4
  * `npm i -g npm@4`
* Setup Android
  * install/start Android Studio
  * SDK-manager ->
    * Google API
    * Android SDK platform 23
    * Intel x86 Atom_64 system image
    * Google Apis Intel x86 Atom_64 system image
    * Android SDK build-tools 23.0.1
* Define enviroment variables:
  * adb.exe path -> open variable Path, add new, `SDK_folder/platform-tools`
  * sdk location -> new variable ANDROID_HOME = sdk location
 
* Test app
  * Simulator:
    * open preferred emulator
    * min Android versio 6.0.0!
  * Device
    * Enable usb debugging -> enable developer mode
* in project folder: `react-native run-android`

### Now code!

## RELEASE
Check React Native docs for detailed info how to generate a signed APK!


