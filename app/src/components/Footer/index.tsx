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

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <Divider rainbow width={2} />
      <StyledDiv>{`With ❤️ and ☕️ by @pirastrino｜${year}`}</StyledDiv>
    </div>
  );
};
