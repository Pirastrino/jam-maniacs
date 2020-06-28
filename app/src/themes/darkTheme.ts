import { DefaultTheme } from 'styled-components';
import { baseTheme } from './baseTheme';

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...{
      font: '#E9E9E9',
    },
  },
};
