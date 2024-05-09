'use client';
import { useTheme, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Title = (): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return isDesktop ? (
    <Box sx={{ padding: '40px', position: 'relative' }}>
      <Typography fontSize="44px" fontWeight={700} lineHeight="130%" margin={0} padding={0}>
        Recibe tu dinero en
        <br />
        10 minutos!
      </Typography>
      <Typography component="h1" fontSize="20px" fontWeight={400} lineHeight="130%" margin="20px 0" padding={0}>
        Préstamos en línea
      </Typography>
    </Box>
  ) : (
    <Box sx={{ left: 0, padding: '15px 10px', position: 'absolute', top: 0 }}>
      <Typography component="p" fontSize="18px" fontWeight={700} lineHeight="130%" margin={0} padding={0}>
        Recibe tu dinero en
        <br />
        10 minutos!
      </Typography>
      <Typography component="h1" fontSize="14px" fontWeight={400} lineHeight="130%" margin="20px 0" padding={0}>
        Préstamos en línea
      </Typography>
    </Box>
  );
};
