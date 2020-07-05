import React from 'react';
import { ThemeProvider } from './src/components/ThemeProvider.tsx';

const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export { wrapRootElement };
