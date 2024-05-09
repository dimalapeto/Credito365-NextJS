'use client';
import { useTheme, Stack, Link, Typography } from '@mui/material';
import { menuItems } from '@/constants';

export const Links = () => {
  const theme = useTheme();

  const linkStyles = {
    fontWeight: { xs: 400, md: 700 },
    fontSize: { xs: '1rem', md: '1.125rem' },
    lineHeight: { xs: '1.3125rem', md: '1.375rem' },
  };

  return (
    <Stack gap="13px">
      {menuItems.map((item: { link: string; text: string }) => (
        <Link
          key={item.text}
          href={item.link}
          target="_blank"
          sx={{
            color: theme.palette.common.white,
            display: 'block',
            textDecoration: 'none',
            lineHeight: 1.3125,
          }}>
          <Typography sx={linkStyles}>{item.text}</Typography>
        </Link>
      ))}
    </Stack>
  );
};
