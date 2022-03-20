export type Theme = {
    dark: boolean;
    roundness: number;
    colors: {
      primary: string;
      background: string;
      surface: string;
      accent: string;
      error: string;
      text: string;
      onSurface: string;
      disabled: string;
      placeholder: string;
      backdrop: string;
      notification: string;
    };
    animation: {
      scale: number;
    };
};