import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    input: ({ theme }) => ({
      height: '18px',
      padding: '14px 15px 13px 15px !important',
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      fontWeight: 500,
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
    }),
  },
};
