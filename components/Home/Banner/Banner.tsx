'use client';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import bannerDesktop from '@/assets/mx_banner_desk.webp';
import bannerMobile from '@/assets/mx_banner_mob.webp';

export const Banner = (): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return isDesktop ? (
    <Image
      src={bannerDesktop}
      alt="banner"
      style={{
        borderRadius: '10px',
        height: '100%',
        left: 0,
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
    />
  ) : (
    <Image
      src={bannerMobile}
      alt="banner"
      style={{
        borderRadius: '10px',
        height: '100%',
        left: 0,
        objectFit: 'cover',
        position: 'relative',
        top: 0,
        width: '100%',
      }}
    />
  );
};
