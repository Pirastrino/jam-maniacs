import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Controller = styled.div`
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
  &:checked + ${Controller} {
    background: ${props => props.theme.colors.bg.paper};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin-left: 17px;
      transition: 0.2s;
    }
  }
`;

const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const Switch = () => {
  const { isDark, toggleDark } = useContext(ThemeManagerContext);
  const onChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) =>
    toggleDark(e.target.checked);

  return (
    <Wrapper>
      <Input
        id="theme-switcher"
        type="checkbox"
        checked={isDark}
        onChange={onChangeToggle}
      />
      <Controller />
      <Label htmlFor="theme-switcher">Theme switcher</Label>
    </Wrapper>
  );
};

export { Switch };
