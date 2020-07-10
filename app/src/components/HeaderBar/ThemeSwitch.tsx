import React from 'react';
import styled from 'styled-components';
import {
  useGlobalState,
  useGlobalDispatch,
  ActionTypes,
} from '../GlobalContextProvider';

const Switch = styled.div`
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
  background: ${props => props.theme.colors.bgSwitch};
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 3px;
    background: ${props => props.theme.colors.yellow};
    transition: 0.4s;
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
    background: ${props => props.theme.colors.bgSwitch};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin-left: 17px;
      transition: 0.4s;
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

const ThemeSwitch = () => {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();

  return (
    <Switch>
      <Input
        id="theme-switcher"
        type="checkbox"
        defaultChecked={state.darkMode}
        onClick={() => dispatch({ type: ActionTypes.TOGGLE_THEME })}
      />
      <Controller />
      <Label htmlFor="theme-switcher">Theme switcher</Label>
    </Switch>
  );
};

export { ThemeSwitch };
