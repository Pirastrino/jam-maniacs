import { DefaultTheme } from 'styled-components';
import { baseTheme } from './baseTheme';

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...{
      font: {
        title: '#EF5350',
        default: '#2C2C2C',
        link: '#2C2C2C',
        linkHover: '#EF5350',
      },
      bg: {
        body: '#FAFAFA',
        header: '#EF5350',
        footer: '#E0E0E0',
        paper: '#FAFAFA',
      },
      button: {
        text: '#2C2C2C',
        default: '#FFB300',
        hover: '#EF5350',
      },
    },
  },
};
