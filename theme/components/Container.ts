import type { Components } from '@mui/material/styles/components';

export const MuiContainer: Components['MuiContainer'] = {
  defaultProps: {
    maxWidth: 'lg',
  },
  styleOverrides: {
    root: {
      '@media (min-width: 1158px)': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
};
