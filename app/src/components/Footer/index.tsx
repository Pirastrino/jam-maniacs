import React from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';

const StyledDiv = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.bg.footer};
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colors.font.link};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.font.linkHover};
  }
`;

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <Divider rainbow width={2} />
      <StyledDiv>
        {`With ❤️ and ☕️ by`}&nbsp;
        <StyledLink href="https://github.com/Pirastrino" target="_blank">
          @pirastrino
        </StyledLink>
        {`｜${year}`}
      </StyledDiv>
    </div>
  );
};
