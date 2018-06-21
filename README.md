<h1 align="center">

<p align="center">
  <img src="https://raw.githubusercontent.com/GrenderG/Toasty/master/art/web_hi_res_512.png" width="100" height= "100"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-toasty"><img src="http://img.shields.io/npm/v/react-native-toasty.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-toasty/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-toasty#License"><img src="https://img.shields.io/npm/l/react-native-toasty.svg?style=flat" /></a>
</p>

    React Native: Native Toast
</h1>

This library is a wrapper around native Toast library which 5 different states of beautiful toasts:
- **Normal**, **Info**, **Success**, **Warning**, **Error**


| **Android: [GrenderG/Toasty](https://github.com/GrenderG/Toasty)**             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/GrenderG/Toasty/master/art/collage.png" />                  |


| **iOS: [scalessec/Toast](https://github.com/scalessec/Toast)**             |
| ----------------- |
|                 |


## Getting Started

`$npm install react-native-toasty`

`$react-native link react-native-toasty`

`$react-native link react-native-vector-icons`


- **Android**

    - Please add below script snippet in your app `build.gradle`

```
buildscript {
    repositories {
        jcenter()
        maven { url "https://maven.google.com" }
        maven { url "https://jitpack.io" }
    }
    ...
}

allprojects {
    repositories {
        jcenter()
        mavenLocal()
        maven { url "https://maven.google.com" }
        maven { url "https://jitpack.io" }
        ...
    }
}
```

> **Note:** Android SDK 27 > is supported

- **iOS**
    - Run Command: `cd ../node_modules/react-native-toasty/ios` && `pod install`. If it has error => try pod repo update then pod install


## Usage

```javascript

import { RNToasty } from 'react-native-toasty'

```

```javascript
RNToasty.Show({
    title: ''
});
```


## Credits
- Android: [GrenderG/Toasty](https://github.com/GrenderG/Toasty)
- iOS: [scalessec/Toast](https://github.com/scalessec/Toast)


## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.


## License
This library is provided under the Apache 2 License.

RNToasty @ Pranav Raj Singh Chauhan
