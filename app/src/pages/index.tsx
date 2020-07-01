import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { lightTheme, darkTheme } from '../themes';
import { Hero } from '../components/Hero';

const App = () => {
  const [useDarkTheme, toggleTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <Layout toggleTheme={toggleTheme}>
        <SEO />
        <Hero />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
