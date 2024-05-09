import { Container } from '@mui/material';

export const Main = ({ dense = false, children }: { dense?: boolean; children: React.ReactNode }): JSX.Element => {
  return (
    <Container
      component="main"
      sx={{
        flexGrow: 1,
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      {children}
    </Container>
  );
};
