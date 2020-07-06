import React from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';

const StyledDiv = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.bgFooter};
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colors.textLink};
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Divider rainbow width={2} />
      <StyledDiv>
        {`With ❤️ and ☕️ by`}&nbsp;
        <StyledLink
          href="https://github.com/Pirastrino"
          target="_blank"
          rel="noopener"
        >
          @pirastrino
        </StyledLink>
        {`｜${year}`}
      </StyledDiv>
    </footer>
  );
};

export { Footer };
