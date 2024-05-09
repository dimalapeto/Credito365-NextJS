import { Stack, Link } from '@mui/material';
import Image from 'next/image';
import phoneFillIconUrl from '@/assets/phoneFill.svg?url';
import timeFillIconIconUrl from '@/assets/timeFill.svg?url';
import mailFillIconUrl from '@/assets/mailFill.svg?url';
import { getCallCenterLink } from '@/utils';
import { CONTACT_MAIL } from '@/constants';
import { Main } from '../style';

export const Contacts = () => {
  const { shortPhone, fullPhone } = getCallCenterLink();

  return (
    <Stack gap={3.125}>
      <Link href={`tel:${shortPhone}`} sx={{ textDecoration: 'none' }}>
        <Stack flexDirection="row" gap="10px" alignItems="center">
          <Image src={phoneFillIconUrl} alt="phone icon" />
          <Stack sx={{ marginTop: 0 }}>
            <Main>{fullPhone}</Main>
          </Stack>
        </Stack>
      </Link>
      <Stack flexDirection="row" gap="10px" alignItems="center">
        <Image src={timeFillIconIconUrl} alt="time icon" />
        <Stack sx={{ marginTop: 0 }}>
          <Main>Lunes a viernes, 09:00 - 16:00</Main>
        </Stack>
      </Stack>
      <Link href={`mailto:${CONTACT_MAIL}`} sx={{ textDecoration: 'none' }}>
        <Stack flexDirection="row" gap="10px" alignItems="center">
          <Image src={mailFillIconUrl} alt="mail icon" />
          <Stack sx={{ marginTop: 0 }}>
            <Main>{CONTACT_MAIL}</Main>
          </Stack>
        </Stack>
      </Link>
    </Stack>
  );
};
