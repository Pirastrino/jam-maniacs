import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  link: string;
};

const StyledButton = styled.div`
  background-color: ${props => props.theme.colors.button.default};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.14rem 2rem;
  min-width: 140px;

  a {
    color: ${props => props.theme.colors.button.text};
    font-weight: 500;
  }

  :hover {
    background-color: ${props => props.theme.colors.button.hover};
  }
`;

export const Button = ({ children, link }: PropsWithChildren<Props>) => {
  return (
    <StyledButton>
      <a href={link}>{children}</a>
    </StyledButton>
  );
};
