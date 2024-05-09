import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import LogoIconUrl from '@/assets/logo.svg?url';

export const logo = {
  maxHeight: { xs: '26px', lg: '44px' },
  width: 'auto',
};

export const Logo = () => {
  return (
    <Link href="/">
      <Box component={Image} src={LogoIconUrl} alt="logo icon" sx={logo} />
    </Link>
  );
};
