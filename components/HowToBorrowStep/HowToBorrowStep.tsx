import { Box, Typography } from '@mui/material';
import * as S from './style';

interface HowToBorrowStepProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const HowToBorrowStep = ({ title, subtitle, children }: HowToBorrowStepProps): JSX.Element => {
  return (
    <Box component="section" sx={S.text}>
      <Box sx={S.container}>
        <Box sx={S.textWrap}>
          <Typography sx={S.subtitle}>{subtitle}</Typography>
          <Box>
            <Typography variant="h3" sx={S.title}>{title}</Typography>
            <Typography variant="body1">{children}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
