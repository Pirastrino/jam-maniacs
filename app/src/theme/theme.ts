import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  respondUp: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  colors: {
    red200: 'var(--red200)',
    red400: 'var(--red400)',
    yellow: 'var(--yellow)',
    gradient: 'var(--gradient)',
    shadow: 'var(--shadow)',
    bgBody: 'var(--bgBody)',
    bgButton: 'var(--bgButton)',
    bgButtonHover: 'var(--bgButtonHover)',
    bgDivider: 'var(--bgDivider)',
    bgFooter: 'var(--bgFooter)',
    bgHeader: 'var(--bgHeader)',
    bgPaperLight: 'var(--bgPaperLight)',
    bgPaper: 'var(--bgPaper)',
    bgPaperDark: 'var(--bgPaperDark)',
    bgSwitch: 'var(--bgSwitch)',
    textButton: 'var(--textButton)',
    textDefault: 'var(--textDefault)',
    textInverse: 'var(--textInverse)',
    textLink: 'var(--textLink)',
    textTitle: 'var(--textTitle)',
  },
};

export { theme };
