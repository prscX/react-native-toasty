import React, { PureComponent } from "react";
import { findNodeHandle, ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

const { RNToasty } = NativeModules;

class Toasty extends PureComponent {
  static propTypes = {
    ...ViewPropTypes,
    
    type: PropTypes.number,

    title: PropTypes.string,
    titleSize: PropTypes.number,
    titleColor: PropTypes.string,

    duration: PropTypes.number,

    tintColor: PropTypes.string,
    withIcon: PropTypes.bool
  };

  static defaultProps = {
    type: 0,

    title: '',
    titleSize: 16,
    titleColor: '#FFFFFF',

    duration: 0,

    tintColor: '',
    withIcon: true
  };

  static Duration = {
    Short: 0,
    Long: 1
  }

  static Types = {
    Normal: 0,
    Info: 1,
    Success: 2,
    Warn: 3,
    Error: 4
  }

  static _Show (props) {
    if (!props) props = {}
    if (props.type === undefined) props.type = Toasty.defaultProps.type;

    if (props.title === undefined) props.title = Toasty.defaultProps.title;
    if (props.titleSize === undefined) props.titleSize = Toasty.defaultProps.titleSize;
    if (props.titleColor === undefined) props.titleColor = Toasty.defaultProps.titleColor;

    if (props.duration === undefined) props.duration = Toasty.defaultProps.duration;

    if (props.tintColor === undefined) props.tintColor = Toasty.defaultProps.tintColor;
    if (props.withIcon === undefined) props.withIcon = Toasty.defaultProps.withIcon;

    RNToasty.Show(props)
  }

  static successStyle = {
    tintColor: ''
  }

  static Success (props) {
    if (!props) props = {};
    if (props.tintColor === undefined) props.tintColor = Toasty.successStyle.tintColor;

    props.type = Toasty.Types.Success

    Toasty._Show(props);
  }

  static errorStyle = {
    tintColor: ''
  }
  static Error (props) {
    if (!props) props = {};
    if (props.tintColor === undefined) props.tintColor = Toasty.errorStyle.tintColor;

    props.type = Toasty.Types.Error

    Toasty._Show(props);
  }

  static infoStyle = {
    tintColor: ''
  }
  static Info (props) {
    if (!props) props = {};
    if (props.tintColor === undefined) props.tintColor = Toasty.infoStyle.tintColor;

    props.type = Toasty.Types.Info

    Toasty._Show(props);
  }

  static warnStyle = {
    tintColor: ''
  }
  static Warn (props) {
    if (!props) props = {};
    if (props.tintColor === undefined) props.tintColor = Toasty.warnStyle.tintColor;

    props.type = Toasty.Types.Warn

    Toasty._Show(props);
  }

  static normalStyle = {
    titleColor: '',
    tintColor: ''
  }
  static Normal (props) {
    if (!props) props = {};
    if (props.tintColor === undefined) props.tintColor = Toasty.normalStyle.tintColor;

    props.type = Toasty.Types.Normal

    Toasty._Show(props);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  _show() {}

  render() {
    return null;
  }
}


export { Toasty as RNToasty };