import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../GlobalContextProvider';

type Props = {
  small?: boolean;
  color?: 'blue' | 'yellow' | 'red400';
};

type StyleProps = Props & {
  darkMode: boolean;
};

const Wrapper = styled.div<StyleProps>`
  background-color: ${props =>
    props.theme.colors[props.color] || 'transparent'};
  width: fit-content;
  padding: 0.3rem 0.6rem;
  border-radius: 0.8rem;
  cursor: default;
  color: ${props =>
    props.darkMode
      ? props.theme.colors.textDefault
      : props.theme.colors.textInverse};
`;

const Badge = ({
  small = false,
  color,
  children,
}: PropsWithChildren<Props>) => {
  const { darkMode } = useGlobalState();

  return (
    <Wrapper color={color} darkMode={darkMode}>
      {children}
    </Wrapper>
  );
};

export { Badge };
