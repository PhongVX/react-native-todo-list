import * as React from "react";
import {ThemeContext} from './context';

ThemeContext.displayName = 'themeContext';

export const useTheme = () => { 
  return React.useContext(ThemeContext)
}
