import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import shieldIconUrl from '@/assets/shield.svg?url';

const staticHeaderStyles = {
  background: '#ece8ff',
  color: '#454545',
  display: 'flex',
  justifyContent: 'center',
  padding: '7px 15px',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1300,
};

const TypographyStyles = {
  alignItems: 'center',
  backgroundImage: `url(${shieldIconUrl})`,
  backgrounPposition: '0 0',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  minHeight: '18px',
  fontWeight: 500,
  fontSize: { xs: '10px', lg: '12px' },
  lineHeight: { xs: '12px', lg: '15px' },
};

export const StaticHeader = () => {
  return (
    <>
      <Box sx={staticHeaderStyles}>
        <Typography sx={TypographyStyles}>
          <Image src={shieldIconUrl} alt="shield icon" style={{ marginRight: '5px' }} />
          Somos una empresa que esta regulada por PROFECO y por buenas prácticas seguimos los lineamientos de CONDUSEF
        </Typography>
      </Box>
      <Box sx={{ ...staticHeaderStyles, position: 'static', visibility: 'hidden' }}>
        <Typography sx={TypographyStyles}>
          <Image src={shieldIconUrl} alt="shield icon" style={{ marginRight: '5px' }} />
          Somos una empresa que esta regulada por PROFECO y por buenas prácticas seguimos los lineamientos de CONDUSEF
        </Typography>
      </Box>
    </>
  );
};
