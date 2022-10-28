

import './App.css';

import Routes from './Routes/Routes';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './tooglethems/theme';
import { GlobalStyles  } from './tooglethems/global'
import React, {  useState } from 'react';
import { createContext } from 'react';
export const ToogleContext = createContext()

function App() {
  const [theme, setTheme] = useState('light');
const toggleTheme = () => {
 
  if (theme === 'light') {
    setTheme('dark');
  
  } else {
    setTheme('light');
  }
}

const toggleinfo= {toggleTheme}

  return (
    <div >
      <ToogleContext.Provider value={toggleinfo}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes></Routes>
     </ThemeProvider>
      </ToogleContext.Provider>

    </div>
  );
}

export default App;
