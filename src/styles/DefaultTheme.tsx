// import color from 'color';
import { black, white, pinkA400, grey600, grey300, grey800 } from './colors';
import type { Theme } from './types';

const DefaultTheme: Theme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#4162E4',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: white,
    error: '#B00020',
    text: black,
    onSurface: '#000000',
    disabled: grey600,
    placeholder: grey300,
    backdrop: grey800,
    notification: pinkA400,
  },
  animation: {
    scale: 1.0,
  },
};

export default DefaultTheme;
