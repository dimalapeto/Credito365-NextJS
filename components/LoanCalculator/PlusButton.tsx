import Image from 'next/image';
import { IconButton } from '@mui/material';
import translation from '@/i18n/translation.json';
import plusIconUrl from '@/assets/calculator-plus.svg?url';

interface PlusButtonProps {
  onClick: () => void;
}

export const PlusButton = ({ onClick }: PlusButtonProps) => (
  <IconButton aria-label={translation.registration.plusBtn} sx={{ padding: 0 }} onClick={onClick}>
    <Image src={plusIconUrl} alt="plus icon" />
  </IconButton>
);
