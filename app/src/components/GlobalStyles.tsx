import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');

  body {
    color: ${props => props.theme.colors.font.default};
    background-color: ${props => props.theme.colors.bg.body};
    font-family: Rubik,  sans-serif;
    font-size: 15px;

    @media (min-width: ${props => props.theme.bp.md}) {
      font-size: 16px;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.font.default};
    }

    h1 {
        font-size: 2rem;
        color: ${props => props.theme.colors.font.title};

        @media (min-width: ${props => props.theme.bp.md}) {
           font-size: 2.5rem;
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
