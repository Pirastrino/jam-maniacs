import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Paper } from '../Paper';

type Props = {
  className?: string;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const AccordionDetail = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <Wrapper className={className}>
      <Paper variant="light">{children}</Paper>
    </Wrapper>
  );
};

export { AccordionDetail };
