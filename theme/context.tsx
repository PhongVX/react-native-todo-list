import * as React from "react";

import {ContextType} from './types';
import DefaultTheme from '../styles/DefaultTheme';

const defaultValue: ContextType = {
    theme: DefaultTheme
}


export const ThemeContext = React.createContext(defaultValue);

