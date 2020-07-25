import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../GlobalContextProvider';

type Props = {
  small?: boolean;
  color?: 'blue' | 'yellow' | 'red400';
  icon?: React.ReactNode;
};

type StyleProps = Props & {
  darkMode: boolean;
};

const Wrapper = styled.div<StyleProps>`
  display: flex;
  align-items: center;
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

const Icon = styled.span`
  display: block;
  width: 1.2rem;
  margin-right: 0.5rem;
`;

const Badge = ({
  small = false,
  color,
  icon,
  children,
}: PropsWithChildren<Props>) => {
  const { darkMode } = useGlobalState();

  return (
    <Wrapper color={color} darkMode={darkMode}>
      {icon ? <Icon>{icon}</Icon> : null}
      <span>{children}</span>
    </Wrapper>
  );
};

export { Badge };
