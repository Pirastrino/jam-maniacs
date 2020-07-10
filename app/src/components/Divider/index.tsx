import React from 'react';
import styled from 'styled-components';

type Props = {
  rainbow?: boolean;
  vertical: boolean;
  width: number;
};

const StyledDiv = styled.div<Props>`
  background: ${props =>
    props.rainbow ? props.theme.colors.gradient : props.theme.colors.bgDivider};
  height: ${props => (!props.vertical && `${props.width}px`) || '100%'};
  width: ${props => (props.vertical && `${props.width}px`) || '100%'};
`;

const Divider = (props: Props) => {
  return <StyledDiv {...props} />;
};

const defaultProps = { rainbow: false, vertical: false, width: 1 };
Divider.defaultProps = defaultProps;

export { Divider };
