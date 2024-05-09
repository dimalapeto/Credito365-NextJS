import { Typography } from '@mui/material';

export const LicenceText = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <Typography sx={{ fontWeight: 500, fontSize: '0.625rem', lineHeight: '0.8125rem', color: '#fefefe', }}>
    {children}
  </Typography>
);
