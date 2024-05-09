import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      top: '-2px !important',
      left: '8px !important',
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      fontWeight: 500,
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
      '&.MuiInputLabel-shrink': {
        left: '0 !important',
        top: '0 !important',
      },
      '&.Mui-error': {
        color: theme.palette.text.secondary,
      },
      '&.Mui-error.MuiInputLabel-shrink': {
        color: theme.palette.error.main,
      },
      '& .MuiFormLabel-asterisk': {
        color: theme.palette.error.main,
      },
    }),
  },
};
