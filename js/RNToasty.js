import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { NativeModules, Platform, ViewPropTypes } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RNVectorHelper from './RNVectorHelper';

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

    withIcon: PropTypes.bool,
    icon: PropTypes.object,
    fontFamily: PropTypes.string,

    position: PropTypes.string,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
  };

  static defaultProps = {
    type: 0,

    title: '',
    titleSize: 0,
    titleColor: '',

    duration: 0,

    tintColor: '',
    withIcon: true,

    position: 'bottom',
    offsetX: 0,
    offsetY: 0,
  };

  static Duration = {
    Short: 0,
    Long: 1,
  };

  static Types = {
    Normal: 0,
    Info: 1,
    Success: 2,
    Warn: 3,
    Error: 4,
  };

  static Show(props) {
    if (!props) props = {};
    if (props.type === undefined) props.type = Toasty.defaultProps.type;
    // name of font
    if (props.fontFamily === undefined) props.fontFamily = '';
    if (props.title === undefined) props.title = Toasty.defaultProps.title;
    if (props.titleSize === undefined)
      props.titleSize = Toasty.defaultProps.titleSize;
    if (props.titleColor === undefined)
      props.titleColor = Toasty.defaultProps.titleColor;

    if (props.duration === undefined)
      props.duration = Toasty.defaultProps.duration;

    if (props.tintColor === undefined)
      props.tintColor = Toasty.defaultProps.tintColor;
    if (props.withIcon === undefined)
      props.withIcon = Toasty.defaultProps.withIcon;

    if (props.withIcon) {
      if (props.icon && props.icon.props) {
        let icon = props.icon.props;

        let vectorIcon = RNVectorHelper.Resolve(icon.family, icon.name);
        props.icon = Object.assign({}, icon, vectorIcon);
      }
    } else {
      props.icon = undefined;
    }

    if (props.position === undefined)
      props.position = Toasty.defaultProps.position;

    if (props.offsetX === undefined)
      props.offsetX = Toasty.defaultProps.offsetX;

    if (props.offsetY === undefined)
      props.offsetY = Toasty.defaultProps.offsetY;

    RNToasty.Show(props);
  }

  static successStyle = {
    tintColor: '#4b994f',
    icon: (
      <Feather
        name={'check-circle'}
        size={22}
        color={'#FFFFFF'}
        family={'Feather'}
      />
    ),
  };
  static Success(props) {
    if (!props) props = {};
    if (props.tintColor === undefined && Platform.OS === 'ios')
      props.tintColor = Toasty.successStyle.tintColor;
    if (props.icon === undefined && Platform.OS === 'ios')
      props.icon = Toasty.successStyle.icon;

    props.type = Toasty.Types.Success;

    Toasty.Show(props);
  }

  static errorStyle = {
    tintColor: '#d81919',
    icon: (
      <Feather
        name={'x-circle'}
        size={22}
        color={'#FFFFFF'}
        family={'Feather'}
      />
    ),
  };
  static Error(props) {
    if (!props) props = {};
    if (props.tintColor === undefined && Platform.OS === 'ios')
      props.tintColor = Toasty.errorStyle.tintColor;
    if (props.icon === undefined && Platform.OS === 'ios')
      props.icon = Toasty.errorStyle.icon;

    props.type = Toasty.Types.Error;

    Toasty.Show(props);
  }

  static infoStyle = {
    tintColor: '#5162bc',
    icon: (
      <Feather name={'info'} size={22} color={'#FFFFFF'} family={'Feather'} />
    ),
  };
  static Info(props) {
    if (!props) props = {};
    if (props.tintColor === undefined && Platform.OS === 'ios')
      props.tintColor = Toasty.infoStyle.tintColor;
    if (props.icon === undefined && Platform.OS === 'ios')
      props.icon = Toasty.infoStyle.icon;

    props.type = Toasty.Types.Info;

    Toasty.Show(props);
  }

  static warnStyle = {
    tintColor: '#feb119',
    icon: (
      <Feather
        name={'minus-circle'}
        size={22}
        color={'#FFFFFF'}
        family={'Feather'}
      />
    ),
  };
  static Warn(props) {
    if (!props) props = {};
    if (props.tintColor === undefined && Platform.OS === 'ios')
      props.tintColor = Toasty.warnStyle.tintColor;
    if (props.icon === undefined && Platform.OS === 'ios')
      props.icon = Toasty.warnStyle.icon;

    props.type = Toasty.Types.Warn;

    Toasty.Show(props);
  }

  static normalStyle = {
    tintColor: '#484d51',
  };
  static Normal(props) {
    if (!props) props = {};
    if (props.tintColor === undefined && Platform.OS === 'ios')
      props.tintColor = Toasty.normalStyle.tintColor;

    props.type = Toasty.Types.Normal;

    Toasty.Show(props);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  show() {}

  render() {
    return null;
  }
}

export { Toasty as RNToasty };
