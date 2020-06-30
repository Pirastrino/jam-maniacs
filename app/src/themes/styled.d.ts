import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bp: {
      sm: string;
      md: string;
      lg: string;
      xl: striong;
    };
    colors: {
      red: string;
      yellow: string;
      gradient: string;
      white: string;
      black: string;
      divider: string;
      font: {
        title: string;
        default: string;
        link: string;
        linkHover: string;
      };
      bg: {
        body: string;
        header: string;
        footer: string;
        paper: string;
      };
      button: {
        text: string;
        default: string;
        hover: string;
      };
    };
  }
}
