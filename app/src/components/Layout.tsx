import React, { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { HeaderBar } from './HeaderBar';
import { Footer } from './Footer';
import 'modern-normalize';

type Props = {
  toggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700');

  body {
      color: ${props => props.theme.colors.font.default};
      background-color: ${props => props.theme.colors.bg.body};
      font-family: Rubik,  sans-serif;
      font-size: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Layout = ({ children, toggleTheme }: PropsWithChildren<Props>) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <HeaderBar toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </Wrapper>
  );
};
