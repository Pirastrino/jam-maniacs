import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../GlobalContextProvider';
import { Link } from 'gatsby';
import { UnstyledButton } from '../UnstyledButton';

type Props = {
  to: string;
};

type StyleProps = {
  darkMode: boolean;
};

const StyledButton = styled(UnstyledButton)<StyleProps>`
  background-color: ${props => props.theme.colors.bgButton};
  box-shadow: ${props => props.theme.colors.shadow};
  padding: 0.5rem 3rem;
  font-weight: 500;
  transition: background-color ease-out 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.bgButtonHover};
    transition: background-color color ease-out 0.2s;

    & a {
      color: ${props => props.theme.colors.textDefault};
    }
  }
`;

const Button = ({ children, to }: PropsWithChildren<Props>) => {
  const { darkMode } = useGlobalState();

  return (
    <StyledButton fullWidth={false} darkMode={darkMode}>
      <Link to={to}>{children}</Link>
    </StyledButton>
  );
};

export { Button };
