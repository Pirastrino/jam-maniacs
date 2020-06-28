// import original module declarations
import 'styled-components';
// and extend them!
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
      black: string;
      divider: string;
      font: string;
    };
  }
}
