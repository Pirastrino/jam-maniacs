import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Paper } from '../Paper';
import { UnstyledButton } from '../UnstyledButton';
import { Divider } from '../Divider';

type Props = {
  className?: string;
};

const Wrapper = styled(UnstyledButton)`
  box-sizing: border-box;
  width: 100%;
`;

const AccordionSummary = ({
  children,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <Wrapper className={className}>
      <Paper>{children}</Paper>
      <Divider />
    </Wrapper>
  );
};

export { AccordionSummary };
