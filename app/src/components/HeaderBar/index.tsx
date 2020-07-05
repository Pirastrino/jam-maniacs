import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Switch } from './Switch';
import { Divider } from '../Divider';

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${props => props.theme.colors.bg.header};

  @media (min-width: ${props => props.theme.bp.md}) {
    height: 60px;
  }
`;

const Link = styled(GatsbyLink)`
  font-weight: 700;
  font-size: 1.2rem;

  :hover {
    color: ${props => props.theme.colors.yellow};
  }

  @media (min-width: ${props => props.theme.bp.md}) {
    font-size: 1.5rem;
  }
`;

const HeaderBar = () => {
  return (
    <div>
      <Wrapper>
        <Link to="/">MANIACS BRNO</Link>
        <Switch />
      </Wrapper>
      <Divider rainbow />
    </div>
  );
};

export { HeaderBar };
