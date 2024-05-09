import { Box, Typography } from '@mui/material';
import { Breadcrumbs } from '@/components';
import CalculatorBlock from './CalculatorBlock';
import * as S from './style';

interface SecondaryPagesTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const SecondaryPagesTemplate = ({ title, children }: SecondaryPagesTemplateProps): JSX.Element => {
  return (
    <Box component="section" sx={S.page}>
      <Breadcrumbs title={title} />
      <Box sx={{ ...S.sectionContainer, ...S.blockLayout }}>
        <Box sx={S.leftSection}>
          <Typography variant="h1" sx={S.pageTitle}>{title}</Typography>
          <Box>{children}</Box>
        </Box>
        <Box sx={S.rightSection}>
          <CalculatorBlock />
        </Box>
      </Box>
    </Box>
  );
};
