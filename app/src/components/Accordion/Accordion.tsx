import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Wrapper = styled.div<Props>`
  background-color: transparent;
  padding: 1rem;
  overflow: hidden;
`;

const Accordion = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export { Accordion };
