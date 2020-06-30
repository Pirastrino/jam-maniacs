import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components/Layout';
import { lightTheme, darkTheme } from '../themes';
import { Hero } from '../components/Hero';

const App = () => {
  const [useDarkTheme, toggleTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <Layout toggleTheme={toggleTheme}>
        <Hero />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
