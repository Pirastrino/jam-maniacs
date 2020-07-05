import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { HeaderBar } from './HeaderBar';
import { Footer } from './Footer';
import 'modern-normalize';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <HeaderBar />
      {children}
      <Footer />
    </Wrapper>
  );
};

export { Layout };
