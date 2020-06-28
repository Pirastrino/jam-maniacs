import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { lightTheme, darkTheme } from '../themes';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const [useDarkTheme, toggleDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <Layout>
        <h1 style={{ textAlign: 'center' }}>Welcome clashers!</h1>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
