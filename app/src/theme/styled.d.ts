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
      red: string;
      yellow: string;
      gradient: string;
      divider: string;
      bgBody: string;
      bgButton: string;
      bgButtonHover: string;
      bgFooter: string;
      bgHeader: string;
      bgPaperLight: string;
      bgPaper: string;
      bgPaperDark: string;
      textDefault: string;
      textInverse: string;
      textLink: string;
      textTitle: string;
    };
  }
}
