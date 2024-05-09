import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    root: {
      borderRadius: '10px',
    },
  },
  variants: [
    {
      props: {
        severity: 'error',
      },
      style: {
        backgroundColor: '#FFF6F6',
        color: '#923131',
        border: '1px solid #F7DCDC',
      },
    },
    {
      props: {
        severity: 'warning',
      },
      style: {
        backgroundColor: '#FDFAE3',
        color: '#4E451A',
        border: '1px solid #FAEFC7',
      },
    },
    {
      props: {
        severity: 'success',
      },
      style: {
        backgroundColor: '#F7FDF7',
        color: '#00752B',
        border: '1px solid #E6F2E8',
      },
    },
    {
      props: {
        severity: 'info',
      },
      style: {
        backgroundColor: '#F1F7FC',
        color: '#34668E',
        border: '1px solid #E3ECF2',
      },
    },
  ],
};
