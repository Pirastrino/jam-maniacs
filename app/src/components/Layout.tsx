import React from 'react';
import styled from 'styled-components';
import { HeaderBar } from './HeaderBar';
import { Footer } from './Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <HeaderBar />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};

export { Layout };
