type BaseTextColors = {
  primary: string;
  secondary: string;
  disabled: string;
  inverse: string;
  success: string;
  error: string;
  warning: string;
  link: string;
  active: string;
  subtle: string;
  subtlest: string;
  tertiary: string;
  info: string;
  default: string;
};

type AccentTextColors = {
  blue: string;
  orange: string;
  teal: string;
  lime: string;
  pinkred: string;
  green: string;
  yellow: string;
  purple: string;
  magenta: string;
  red: string;
  white: string;
};

type BaseBordersColors = {
  secondary: string;
  tertiary: string;
  inverse: string;
  success: string;
  error: { errorDefault: string; errorDark: string };
  warning: string;
  disabled: string;
  active: string;
  destructive: string;
  info: string;
  seperatorDefault: string;
  default: string;
  subtle: string;
  subtlest: string;
};

type AccentBordersColors = {
  teal: string;
  blue: string;
  purple: string;
  magenta: string;
  pinkred: string;
  red: string;
  orange: string;
  yellow: string;
  lime: string;
  green: string;
};

type BaseBackgroundColors = {
  default: string;
  secondary: string;
  tertiary: {
    default: string;
    pressed: string;
  };
  subtle: string;
  subtlest: string;
  inverse: string;
  active: string;
  info: string;
  success: string;
  error: { errorDefault: string; errorDark: string };
  destructive: string;
  warning: string;
  disabled: string;
  primary: string;
};

type AccentBackgroundColors = {
  teal: string;
  blue: string;
  purple: string;
  magenta: string;
  pinkred: string;
  red: string;
  orange: string;
  yellow: string;
  lime: string;
  green: string;
};

type BaseIconColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  subtle: string;
  subtlest: string;
  inverse: string;
  disabled: string;
  active: string;
  info: string;
  success: string;
  error: string;
  warning: string;
  link: string;
  default: string;
};

type AccentIconColors = {
  teal: string;
  blue: string;
  purple: string;
  magenta: string;
  pinkred: string;
  red: string;
  orange: string;
  yellow: string;
  lime: string;
  green: string;
  white: string;
};
export interface IColor {
  text: BaseTextColors & AccentTextColors;
  border: BaseBordersColors & AccentBordersColors;
  background: BaseBackgroundColors & AccentBackgroundColors;
  icon: BaseIconColors & AccentIconColors;
}
