import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
      --blue: #1565c0;
      --red200: #ef9a9a;
      --red400: #ef5350;
      --yellow: #ffc107;
      --gradient: linear-gradient(90deg, #ef5350 0%, #ffc107 100%);
      --shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    }

  body {
    background-color: var(--bgBody);
    color: var(--textDefault);
    font-family: Rubik,  sans-serif;

    &.dark {
      --bgBody: #222222;
      --bgButton: #d32f2f;
      --bgButtonHover: #b71c1c;
      --bgDivider: #616161;
      --bgFooter: #333333;
      --bgHeader: #333333;
      --bgPaperLight: #515151;
      --bgPaper: #424242;
      --bgPaperDark: #333333;
      --bgSwitch: #757575;
      --textButton: #2c2c2c;
      --textDefault: #ffffff;
      --textInverse: #2c2c2c;
      --textLink: #e9e9e9;
      --textLinkHover: #ffb300;
      --textTitle: #ffb300;
    }

    &.light {
      --bgBody: #ffffff;
      --bgButton: #ffc107;
      --bgButtonHover: #e6a800;
      --bgDivider: #e0e0e0;
      --bgFooter: #e0e0e0;
      --bgHeader: #e0e0e0;
      --bgPaperLight: #ffffff;
      --bgPaper: #eeeeee;
      --bgPaperDark: #e0e0e0;
      --bgSwitch: #333333;
      --textButton: #2c2c2c;
      --textDefault: #252a31;
      --textInverse: #e9e9e9;
      --textLink: #2c2c2c;
      --textLinkHover: #d32f2f;
      --textTitle: #252a31;
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

    svg {
      display: block
    }
  }
`;

export { GlobalStyles };
