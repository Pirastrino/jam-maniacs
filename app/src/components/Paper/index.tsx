import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
  variant: 'light' | 'defualt' | 'dark';
};

const Canva = styled.div<Props>`
  background-color: ${props => {
    if (props.variant === 'light') return props.theme.colors.bgPaperLight;
    if (props.variant === 'dark') return props.theme.colors.bgPaperDark;
    else return props.theme.colors.bgPaper;
  }};
  padding: 1rem;
  display: flex;
`;

const Paper = ({ variant, children }: PropsWithChildren<Props>) => {
  return <Canva variant={variant}>{children}</Canva>;
};

Paper.defaultProps = {
  variant: 'default',
};

export { Paper };
