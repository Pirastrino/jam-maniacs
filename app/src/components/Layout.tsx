import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { HeaderBar } from './HeaderBar';
import { Footer } from './Footer';
import 'modern-normalize';

type Props = {
  children: any;
  toggleTheme?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Layout: React.FC<Props> = ({ children, toggleTheme }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <HeaderBar toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </Wrapper>
  );
};

export { Layout };
