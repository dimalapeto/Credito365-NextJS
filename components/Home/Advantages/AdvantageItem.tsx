import { Stack, Typography } from '@mui/material';
import * as S from './style';

interface AdvantagesItemProps {
  title: string;
  children: React.ReactNode;
}

export const AdvantagesItem = ({ title, children }: AdvantagesItemProps): JSX.Element => {
  return (
    <Stack gap="20px" sx={S.advantagesItemWrapper}>
      <Typography fontSize="20px" fontWeight={700} lineHeight="130%">
        {title}
      </Typography>
      {children}
    </Stack>
  );
};
