import React from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-color: ${props => props.theme.colors.red};

  @media (min-width: ${props => props.theme.bp.md}) {
    height: 60px;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.2rem;

  @media (min-width: ${props => props.theme.bp.md}) {
    font-size: 1.5rem;
  }
`;

export const HeaderBar = () => {
  return (
    <div>
      <Wrapper>
        <Logo>MANIACS BRNO</Logo>
      </Wrapper>
      <Divider rainbow />
    </div>
  );
};
