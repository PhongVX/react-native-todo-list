import {Theme} from '../styles/types';

export type ContextType = {
    theme?: Theme,
    updateTheme?: (event: any) => void
}