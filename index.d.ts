declare module 'react-native-toasty' {
  export interface Options {
    title: string;
    titleSize?: number;
    titleColor?: string;
    duration?: 0 | 1;
    tintColor?: string;
    withIcon?: boolean;
    icon?: Element;
    fontFamily?: string;
    position?: 'top' | 'center' | 'bottom';
    /**
     * Android only
     */
    offsetX?: number;
    /**
     * Android only
     */
    offsetY?: number;
  }

  export var RNToasty: {
    Show: (options: Options) => void;
    Normal: (options: Options) => void;
    Info: (options: Options) => void;
    Success: (options: Options) => void;
    Warn: (options: Options) => void;
    Error: (options: Options) => void;
  };
}
