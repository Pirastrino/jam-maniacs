import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { ThemeSwitch } from './ThemeSwitch';
import { Divider } from '../Divider';

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${props => props.theme.colors.bgHeader};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 60px;
  }
`;

const Home = styled(GatsbyLink)`
  font-weight: 700;
  font-size: 1.2rem;
`;

const HeaderBar = () => {
  return (
    <header>
      <Wrapper>
        <Home to="/">MANIACS BRNO</Home>
        <ThemeSwitch />
      </Wrapper>
      <Divider rainbow />
    </header>
  );
};

export { HeaderBar };
