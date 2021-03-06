import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Navigation } from './Navigation';
import { ThemeSwitch } from './ThemeSwitch';
import { Divider } from '../Divider';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.bgHeader};
  box-shadow: ${props => props.theme.colors.shadow};
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 2rem;

  @media (min-width: ${props => props.theme.respondUp.md}) {
    height: 60px;
  }
`;

const Home = styled(GatsbyLink)`
  font-weight: 700;

  @media (min-width: ${props => props.theme.respondUp.md}) {
    font-size: 1.2rem;
  }
`;

const HeaderBar = () => {
  return (
    <header>
      <Wrapper>
        <Home to="/">MANIACS BRNO</Home>
        <Navigation />
        <ThemeSwitch />
      </Wrapper>
      <Divider rainbow />
    </header>
  );
};

export { HeaderBar };
