import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      red200: string;
      red400: string;
      yellow: string;
      gradient: string;
      shadow: string;
      bgBody: string;
      bgButton: string;
      bgButtonHover: string;
      bgDivider: string;
      bgFooter: string;
      bgHeader: string;
      bgPaperLight: string;
      bgPaper: string;
      bgPaperDark: string;
      bgSwitch: string;
      textDefault: string;
      textInverse: string;
      textLink: string;
      textTitle: string;
    };
  }
}
