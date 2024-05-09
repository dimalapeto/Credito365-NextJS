import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiAlertTitle: Components<Theme>['MuiAlertTitle'] = {
  styleOverrides: {
    root: {
      fontSize: '0.875rem',
      lineHeight: 1.3,
    },
  },
};
