import { Box, List, ListItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import breadcrumbsArrowIconUrl from '@/assets/breadcrumbs-arrow.svg?url';
import * as S from './style';

interface BreadcrumbsProps {
  title: string;
}

export const Breadcrumbs = ({ title }: BreadcrumbsProps): JSX.Element => {
  return (
    <Box sx={{ ...S.sectionContainer, ...S.blockLayout }}>
      <List sx={S.breadcrumbs}>
        <ListItem sx={{ ...S.breadcrumbsItem, ...S.breadcrumbsPrimary }} disableGutters>
          <Link href="/">Credito 365</Link>
          <Image src={breadcrumbsArrowIconUrl} alt="breadcrumbs arrow icon" />
        </ListItem>
        <ListItem sx={{ ...S.breadcrumbsItem, ...S.breadcrumbsSecondary }} disableGutters>{title}</ListItem>
      </List>
    </Box>
  );
};
