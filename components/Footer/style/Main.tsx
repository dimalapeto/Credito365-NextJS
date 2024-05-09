import { Typography } from '@mui/material';

export const Main = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <Typography sx={{ fontWeight: 700, fontSize: '1.125rem', lineHeight: '1.375rem', color: '#fefefe', }}>
    {children}
  </Typography>
);
