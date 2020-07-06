import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  link: string;
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.bgButton};
  justify-content: center;
  padding: 0.5rem 2rem;
  width: fit-content;

  :hover {
    background-color: ${props => props.theme.colors.bgButtonHover};
  }
`;

const Button = ({ children, link }: PropsWithChildren<Props>) => {
  return (
    <StyledButton>
      <a href={link}>{children}</a>
    </StyledButton>
  );
};

export { Button };
