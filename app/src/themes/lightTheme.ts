import { DefaultTheme } from 'styled-components';
import { baseTheme } from './baseTheme';

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...{
      font: '#2C2C2C',
      bg: {
        body: '#FAFAFA',
        footer: '#E0E0E0',
      },
    },
  },
};
