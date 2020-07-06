import React, { createElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalContextProvider } from './src/components/GlobalContextProvider';
import { theme, GlobalStyles } from './src/theme';
import { Layout } from './src/components/Layout';
import 'modern-normalize';

export const wrapRootElement = ({ element }: any) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </GlobalContextProvider>
  );
};

export const wrapPageElement = ({ element, props }: any) => {
  return (
    <Layout {...props}>
      <GlobalStyles />
      {element}
    </Layout>
  );
};

export const onRenderBody = ({ setPreBodyComponents }: any) => {
  setPreBodyComponents([
    createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
          (() => {
            window.__onThemeChange = function() {};
            function setTheme(newTheme) {
              window.__theme = newTheme;
              preferredTheme = newTheme;
              document.body.className = newTheme;
              window.__onThemeChange(newTheme);
            }

            let preferredTheme
            try {
              preferredTheme = localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light';
            } catch (err) {}

            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)
              try {
                localStorage.setItem('darkMode', (newTheme === 'dark').toString())
              } catch (err) {}
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
            darkQuery.addListener(e => {
              window.__setPreferredTheme(e.matches ? 'dark' : 'light')
            })

            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
          })()
        `,
      },
    }),
  ]);
};
