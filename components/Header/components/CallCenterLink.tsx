'use client';
import { styled, Link } from '@mui/material';
import { getCallCenterLink } from '@/utils';

const CallCenter = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover': {
    color: theme.palette.primary.main,
  },
})) as typeof Link;

export const CallCenterLink = () => {
  const { shortPhone, fullPhone } = getCallCenterLink();
  return (
    <CallCenter variant="subtitle2" href={`tel:${shortPhone}`}>
      {fullPhone}
    </CallCenter>
  );
};
