import { Paper, Container, Stack } from '@mui/material';
import { Contacts, Links, Social, DevMenu } from './components';
import { isDev } from '@/utils';

export const Footer = () => {
  const stackStyles = {
    flexDirection: { xs: 'column', md: 'row' },
    minHeight: { xs: '225px', md: '180px' },
    justifyContent: { xs: 'space-evenly', md: 'space-between' },
    alignItems: 'flex-start',
    paddingY: { xs: 3.75, md: 5 },
    gap: { xs: 3.75, md: 0 },
  };

  return (
    <Paper sx={{ backgroundColor: '#282828', width: '100%' }} component="footer" square variant="outlined">
      <Container sx={{ height: '100%' }}>
        <Stack sx={stackStyles}>
          <Contacts />
          <Links />
          <Social />
        </Stack>
        {isDev && <DevMenu />}
      </Container>
    </Paper>
  );
};
