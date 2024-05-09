import Image from 'next/image';
import { IconButton } from '@mui/material';
import translation from '@/i18n/translation.json';
import minusIconUrl from '@/assets/calculator-minus.svg?url';

interface MinusButtonProps {
  onClick: () => void;
}

export const MinusButton = ({ onClick }: MinusButtonProps) => (
  <IconButton aria-label={translation.registration.minusBtn} sx={{ padding: 0 }} onClick={onClick}>
    <Image src={minusIconUrl} alt="minus icon" />
  </IconButton>
);
