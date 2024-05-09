import type { Components } from '@mui/material/styles/components';

export const MuiButton: Components['MuiButton'] = {
  variants: [
    {
      props: {
        variant: 'contained',
        size: 'large',
      },
      style: {
        fontSize: '1rem',
        lineHeight: '1.1875rem',
        fontWeight: 700,
        borderRadius: '100px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none !important',
        },
        padding: '16.5px 22px',
        textTransform: 'none',
      },
    },
    {
      props: {
        variant: 'contained',
        size: 'small',
      },
      style: {
        fontSize: '0.875rem',
        lineHeight: '1.125rem',
        fontWeight: 700,
        borderRadius: '100px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none !important',
        },
        padding: '6px 24px',
        textTransform: 'none',
      },
    },
    {
      props: {
        variant: 'outlined',
        size: 'small',
      },
      style: {
        fontSize: '0.875rem',
        lineHeight: '1.125rem',
        borderRadius: '10px',
        borderColor: '#e9e9e9',
        backgroundColor: '#e9e9e9',
        color: '#0C122A',
        boxShadow: 'none',
        padding: '6px 9px',
        textTransform: 'none',
        '&:hover': {
          boxShadow: 'none !important',
          backgroundColor: '#FEFEFE',
          color: '#0C122A',
          borderColor: '#e9e9e9',
        },
      },
    },
    {
      props: {
        variant: 'text',
        size: 'small',
      },
      style: {
        fontSize: '0.875rem',
        lineHeight: '1.125rem',
        boxShadow: 'none',
        padding: '6px 9px',
        textTransform: 'none',
        '&:hover': {
          boxShadow: 'none !important',
          backgroundColor: '#FEFEFE',
          borderColor: '#e9e9e9',
        },
      },
    },
  ],
};
