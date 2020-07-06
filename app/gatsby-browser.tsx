import React from 'react';
import storage from 'local-storage-fallback';
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

export const onRouteUpdate = () => {
  const defaultThemeDark = storage.getItem('darkMode') === 'true';
  document
    .querySelector('body')
    ?.classList.add(defaultThemeDark ? 'dark' : 'light');
};
