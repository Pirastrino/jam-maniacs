import React from 'react';
import styled from 'styled-components';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  id?: string;
  isDisabled?: boolean;
  fullWidth?: boolean;
  onMouseUp?: () => void;
};

const Clickable = styled.button<Props>`
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  box-sizing: content-box;
  border: none;
  color: inherit;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
  font: inherit;
  padding: 0;
  outline: 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  appearance: none;
`;

const UnstyledButton = ({
  onClick,
  children,
  className,
  id,
  isDisabled,
  fullWidth = true,
  onMouseUp,
}: Props) => (
  <Clickable
    onClick={onClick}
    className={className}
    id={id}
    disabled={isDisabled}
    fullWidth={fullWidth}
    onMouseUp={onMouseUp}
  >
    {children}
  </Clickable>
);

export { UnstyledButton };
