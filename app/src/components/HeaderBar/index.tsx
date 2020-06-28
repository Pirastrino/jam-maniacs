import React from 'react';
import styled from 'styled-components';
import { Switch } from './Switch';
import { Divider } from '../Divider';

type Props = {
  toggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

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

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.2rem;

  @media (min-width: ${props => props.theme.bp.md}) {
    font-size: 1.5rem;
  }
`;

export const HeaderBar = ({ toggleTheme }: Props) => {
  return (
    <div>
      <Wrapper>
        <Logo>MANIACS BRNO</Logo>
        <Switch toggleTheme={toggleTheme} />
      </Wrapper>
      <Divider rainbow />
    </div>
  );
};
