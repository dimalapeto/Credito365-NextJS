'use client';
import { useTheme, Stack, Typography, Link } from '@mui/material';
import Image from 'next/image';
import translation from '@/i18n/translation.json';
import { FACEBOOK } from '@/constants';
import facebookFillIconUrl from '@/assets/facebookFill.svg?url';
import { LicenceText } from '../style';

export const Social = () => {
  const theme = useTheme();

  return (
    <Stack justifyContent="space-between" alignSelf="stretch" sx={{ gap: { xs: 3.75, md: 0 } }}>
      <Stack gap={1.25}>
        <Typography
          sx={{ color: theme.palette.common.white, fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.125rem' }}
        >
          {translation.footer.social}
        </Typography>
        <Stack flexDirection="row" justifyContent="flex-start" gap={1.25}>
          <Link href={FACEBOOK} sx={{ textDecoration: 'none' }} target="_blank">
            <Image src={facebookFillIconUrl} alt="login icon" />
          </Link>
        </Stack>
      </Stack>
      <Stack justifyContent="flex-end" sx={{ flexBasis: { xs: 'auto', md: '25%' } }}>
        <LicenceText>CREDITO 365 SAPI DE CV,</LicenceText>
        <LicenceText>Domicilio: Av. Pdte. Masaryk 29, Piso 1, Oficina 38,</LicenceText>
        <LicenceText>Polanco V Sección, Miguel Hidalgo, Ciudad de México C.P. 11560</LicenceText>
      </Stack>
    </Stack>
  );
};
