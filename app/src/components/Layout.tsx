import React, { FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import { HeaderBar } from './HeaderBar';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700');

  body {
      color: ${props => props.theme.colors.font};
      font-family: Rubik,  sans-serif;
      font-size: 16px;
  }
`;

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <HeaderBar />
      {children}
    </>
  );
};
