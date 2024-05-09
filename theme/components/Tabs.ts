import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    root: {
      '& .MuiTabs-flexContainer': {
        gap: '0.3125rem',
      },
      '& .MuiTabs-indicator': {
        backgroundColor: 'transparent',
      },
    },
  },
};
