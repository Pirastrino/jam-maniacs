import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
      --red: #EF5350;
      --yellow: #FFB300;
      --gradient: linear-gradient(90deg, #EF5350 0%, #FFB300 100%);
      --divider: #595959;
    }

  body {
    background-color: var(--bgBody);
    color: var(--textDefault);
    font-family: Rubik,  sans-serif;

    &.dark {
      --bgBody: #35363A;
      --bgButton: #FFB300;
      --bgButtonHover: #EF5350;
      --bgFooter: #2C2C2C;
      --bgHeader: #2C2C2C;
      --bgPaperLight: #787878;
      --bgPaper: #787878;
      --bgPaperDark: #787878;
      --textDefault: #E9E9E9;
      --textInverse: #2C2C2C;
      --textLink: #E9E9E9;
      --textLinkHover: #FFB300;
      --textTitle: #FFB300;
    }

    &.light {
      --bgBody: #FAFAFA;
      --bgButton: #FFB300;
      --bgButtonHover: #EF5350;
      --bgFooter: #E0E0E0;
      --bgHeader: #EF5350;
      --bgPaperLight: #FAFAFA;
      --bgPaper: #FAFAFA;
      --bgPaperDark: #FAFAFA;
      --textDefault: #2C2C2C;
      --textInverse: #E9E9E9;
      --textLink: #2C2C2C;
      --textLinkHover: #FFB300;
      --textTitle: #EF5350;
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(--textTitle);
    }

    a {
      text-decoration: none;
      color: var(--textLink);

      :hover {
        color: var(--textLinkHover);
      }
    }

    button {
      border: none;
    }

    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export { GlobalStyles };
