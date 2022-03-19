import * as React from "react";
import { ThemeContext } from './context';

import {Theme} from '../styles/types';

interface ThemeProviderProps { 
  theme?: Theme
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children, theme}) => {
  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
