import type { Components } from '@mui/material/styles/components';

export const MuiChip: Components['MuiChip'] = {
  styleOverrides: {
    root: {
      borderRadius: '10px',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '1rem',
    },
  },
};
