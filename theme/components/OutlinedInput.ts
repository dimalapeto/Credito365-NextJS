import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: '10px',
      paddingLeft: '0.5rem',
      '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #BAC3D5',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: '#BAC3D5',
      },
      '&:hover.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: '#BAC3D5',
      },
    }),
    input: ({ theme }) => ({
      '&::-webkit-input-placeholder': {
        color: theme.palette.text.secondary,
        opacity: 1,
      },
    }),
  },
};
