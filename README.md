<h1 align="center">

<p align="center">
  <img src="https://png.icons8.com/cotton/1600/toast.png" width="100" height= "100"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-toasty"><img src="http://img.shields.io/npm/v/react-native-toasty.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-toasty/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-toasty#License"><img src="https://img.shields.io/npm/l/react-native-toasty.svg?style=flat" /></a>
</p>

    ReactNative: Native Toast

If this project has helped you out, please support us with a star 🌟

</h1>

This library is a wrapper around native Toast library which 5 different states of beautiful toasts:

- **Normal**, **Info**, **Success**, **Warning**, **Error**

| **Android: [GrenderG/Toasty](https://github.com/GrenderG/Toasty)**                     |
| -------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/GrenderG/Toasty/master/art/collage.png" /> |

| **iOS: [scalessec/Toast](https://github.com/scalessec/Toast)** |
| -------------------------------------------------------------- |
|                                                                |

## 📖 Getting Started

`$npm install react-native-toasty`

## **RN61 >= RNPE V1 >**

> RN61 above please use `react-native-toasty` V1 and above

- **iOS**

> **iOS Prerequisite:** Please make sure `CocoaPods` is installed on your system

    - Add the following to your `Podfile` -> `ios/Podfile` and run pod update:

```
  use_native_modules!

  pod 'RNToasty', :path => '../node_modules/react-native-toasty/ios'

```

- **Android**

Please add below snippet into your app `build.gradle`

```
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

## **RN61 < RNPE V1 <**

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
  - After `react-native link react-native-toasty`, please verify `node_modules/react-native-toasty/ios/` contains `Pods` folder. If does not exist please execute `pod install` command on `node_modules/react-native-toasty/ios/`, if any error => try `pod repo update` then `pod install`

## 💻 Usage

```javascript
import { RNToasty } from 'react-native-toasty';
```

```javascript
RNToasty.Show({
  title: 'This is a toast',
  fontFamily: 'Arial',
  position: 'center',
});
```

## 🎨 API's

**Normal**, **Info**, **Success**, **Warning**, **Error**, **Custom**

```javascript
RNToasty.Normal({}),
  RNToasty.Info({}),
  RNToasty.Success({}),
  RNToasty.Warn({}),
  RNToasty.Error({}),
  RNToasty.Show({});
```

## 💡 Props

- **Props: Generic**

| Prop         | Type                  | Default   | Note                                                                  |
| ------------ | --------------------- | --------- | --------------------------------------------------------------------- |
| `title`      | `string`              |           | Specify the title of toast                                            |
| `titleSize`  | `number`              | 16        | Specify the title size                                                |  |
| `titleColor` | `string: HEX-COLOR`   | `#FFFFFF` | Specify the title color                                               |  |
| `duration`   | `number`              |           | Specify the duration of toast: `0: SHORT; 1: LONG`                    |
| `tintColor`  | `string: HEX-NUMBER`  | `#000000` | Specify the tint color of toast                                       |
| `withIcon`   | `bool`                | `true`    | Specify whether you need icon                                         |
| `icon`       | `vector-icon`         |           | Specify icon of toast                                                 |
| `fontFamily` | `string`              |           | Name of font in assets/fonts folder => like 'Arial' [Only on Android] |
| `position`   | `top\|center\|bottom` | `bottom`  | Specify position of toast                                             |
| `offsetX`    | `number`              | `0`       | Specify X offset of toast [Only on Android]                           |
| `offsetY`    | `number`              | `0`       | Specify Y offset of toast [Only on Android]                           |

## Icons

- **RN Vector Icons:** It supports [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) library. Please find below snippet for the usage:

```javascript
	let facebook = <Icon family={'FontAwesome'} name={'facebook'} color={'#000000'} size={30} />

	<RNBottomActionSheet.GridView.Item title={"Facebook"} icon={facebook} />
```

> **Note:**
>
> - We have added `family` prop for `Icon` class, please make sure that you pass the props

## ✨ Credits

- Android: [GrenderG/Toasty](https://github.com/GrenderG/Toasty)
- iOS: [scalessec/Toast](https://github.com/scalessec/Toast)

## 🤔 How to contribute

Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-toasty/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?

If you are using this library in one of your projects, add it in this list below. ✨

## 📜 License

This library is provided under the Apache 2 License.

RNToasty @ [prscX](https://github.com/prscX)

## 💖 Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

- Starring and sharing the projects you like 🚀
- If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >
