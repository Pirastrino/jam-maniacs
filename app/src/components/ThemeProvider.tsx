import React from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../themes/lightTheme';
import { darkTheme } from '../themes/darkTheme';

const ThemeProvider: React.FC = ({ children }) => {
  const { value } = useDarkMode();

  return (
    <StyledThemeProvider theme={value ? darkTheme : lightTheme}>
      {children}
    </StyledThemeProvider>
  );
};

export { ThemeProvider };
