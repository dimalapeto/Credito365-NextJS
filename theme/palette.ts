import type { PaletteOptions } from '@mui/material/styles/createPalette';

export const palette: PaletteOptions = {
  mode: 'light',
  common: {
    white: '#FEFEFE',
    black: '#0C122A',
  },
  primary: {
    main: '#6948EB', // primary purple
    contrastText: '#FEFEFE',
  },
  text: {
    primary: '#0C122A', // text primary
    secondary: '#697395', // divider grey
  },
  error: {
    main: '#EA1717', // TBD
  },
  action: {
    disabled: '#FEFEFE',
    disabledBackground: '#A9A9A9',
    disabledOpacity: 1,
  },
};
