import { DefaultTheme } from 'styled-components';
import { baseTheme } from './baseTheme';

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...{
      font: {
        default: '#E9E9E9',
        link: '#E9E9E9',
        linkHover: '#FFCA28',
      },
      bg: {
        body: '#35363A',
        header: '#2C2C2C',
        footer: '#2C2C2C',
        paper: '#787878',
      },
    },
  },
};
