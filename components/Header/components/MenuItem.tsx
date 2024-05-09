'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme, Link as MuiLink, type LinkProps } from '@mui/material';

interface MenuItemProps extends LinkProps {
  link: string;
  text: string;
  isMobile?: boolean;
}

export const MenuItem = ({ link, text, isMobile = true, ...rest }: MenuItemProps) => {
  const pathname = usePathname();
  const theme = useTheme();

  const desktopMenuItemStyles = {
    lineHeight: 1.3125,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  };

  const mobileMenuItemStyles = {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    marginTop: 1,
    marginBottom: 1,
  };

  const styles = {
    display: 'block',
    textDecoration: 'none',
    color: pathname.includes(link) ? theme.palette.primary.main : theme.palette.text.primary,
    ...(isMobile ? mobileMenuItemStyles : desktopMenuItemStyles),
  };

  return (
    <MuiLink component={Link} key={link} href={link} sx={styles} {...rest}>
      {text}
    </MuiLink>
  );
};
