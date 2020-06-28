import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components/Layout';
import { lightTheme, darkTheme } from '../themes';

const App = () => {
  const [useDarkTheme, toggleTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <Layout toggleTheme={toggleTheme}>
        <h1 style={{ textAlign: 'center' }}>Welcome clashers!</h1>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
