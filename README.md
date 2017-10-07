# ToastTest
React Native demonstration with Redux and React Navigation.


## Generating a non-signed APK
* Run at root directory (eq. c:\Repos\ToastTest\)
  * react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug 
* Then run ->
  * cd android && gradlew assembleDebug
* Debug apk will be available in \ToastTest\android\app\build\outputs\apk

