import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.3125rem',
      textTransform: 'none',
      '&.Mui-selected': {
        fontWeight: 700,
        lineHeight: '1.1875rem',
        color: theme.palette.text.primary,
        padding: '8px 16px',
        backgroundColor: '#F7F7FA',
        borderRadius: '3rem',
      },
    }),
  },
};
