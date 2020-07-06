import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  colors: {
    red: 'var(--red)',
    yellow: 'var(--yellow)',
    gradient: 'var(--gradient)',
    divider: 'var(--bgDivider)',
    bgBody: 'var(--bgBody)',
    bgButton: 'var(--bgButton)',
    bgButtonHover: 'var(--bgButtonHover)',
    bgFooter: 'var(--bgFooter)',
    bgHeader: 'var(--bgHeader)',
    bgPaperLight: 'var(--bgPaperLight)',
    bgPaper: 'var(--bgPaper)',
    bgPaperDark: 'var(--bgPaperDark)',
    textDefault: 'var(--textDefault)',
    textInverse: 'var(--textInverse)',
    textLink: 'var(--textLink)',
    textTitle: 'var(--textTitle)',
  },
};

export { theme };
