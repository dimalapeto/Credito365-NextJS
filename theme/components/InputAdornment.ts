import type { Components } from '@mui/material/styles/components';

export const MuiInputAdornment: Components['MuiInputAdornment'] = {
  styleOverrides: {
    root: {
      p: {
        fontSize: '0.875rem',
        lineHeight: '1.125rem',
        fontWeight: 500,
        color: '#0C122A',
      },
    },
    positionStart: {
      height: '100%',
      padding: '9px 6px',
      borderRadius: '5px',
      backgroundColor: '#F7F7FA',
      marginRight: '-10px',
    },
  },
};
