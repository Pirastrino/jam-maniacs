import React from 'react';
import styled from 'styled-components';

type Props = {
  toggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 21px;
  border-radius: 15px;
  background: ${props => props.theme.colors.black};
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 3px;
    background: ${props => props.theme.colors.yellow};
    transition: 0.2s;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 34px;
  height: 21px;
  cursor: pointer;
  &:checked + ${Label} {
    background: ${props => props.theme.colors.bg.paper};
    &::after {
      content: '';
      display: block;
      /* background: ${props => props.theme.colors.bg.paper}; */
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin-left: 17px;
      transition: 0.2s;
    }
  }
`;

export const Switch = ({ toggleTheme }: Props) => {
  const onChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) =>
    toggleTheme(e.target.checked);

  return (
    <Wrapper>
      <Input id="theme-switcher" type="checkbox" onChange={onChangeToggle} />
      <Label htmlFor="theme-switcher" />
    </Wrapper>
  );
};
