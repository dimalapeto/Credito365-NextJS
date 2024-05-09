'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { styled, useTheme, Drawer, Toolbar, Divider, Link as MuiLink, Stack, Typography } from '@mui/material';
// import * as Sentry from '@sentry/react';
import translation from '@/i18n/translation.json';
import { menuItems } from '@/constants';
import { getCallCenterLink, clearStorageSession } from '@/utils';
import { useAppSelector, useAppDispatch, selectUser, updateUserAction, updateUserAuthentication } from '@/store';
import { MenuItem } from './MenuItem';
import phoneLightFillIconUrl from '@/assets/phoneLightFill.svg?url';
import timeLightFillIconUrl from '@/assets/timeLightFill.svg?url';

interface MobileMenuProps {
  open: boolean;
  onToggle: () => void;
}

export const Main = styled(Typography)`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  color: #fefefe;
`;

export const MobileMenu = ({ open, onToggle }: MobileMenuProps) => {
  const { authenticated } = useAppSelector(selectUser);
  const { shortPhone, fullPhone } = getCallCenterLink();
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const hideLogin = pathname.includes('registration') || pathname.includes('login') || pathname.includes('take-loan');

  const typographyStyles = {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: theme.palette.text.primary,
  };

  const handleLogout = () => {
    clearStorageSession();
    dispatch(updateUserAction({ user: { id: 0, username: '' } }));
    dispatch(updateUserAuthentication(false));
    // Sentry.setUser(null);
    onToggle();
  };

  return (
    <Drawer
      sx={{
        width: '100%',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: '100%', boxSizing: 'border-box' },
      }}
      hideBackdrop
      variant="temporary"
      anchor="right"
      open={open}
      onClose={onToggle}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Toolbar sx={{ height: '119px' }} />
      {!hideLogin && authenticated && (
        <>
          <Stack
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={2}
            sx={{ padding: theme.spacing(2.5, 1.875), ...typographyStyles }}
          >
            <Typography
              component={Link}
              href="/user/login"
              fontWeight={400}
              fontSize="0.875rem"
              lineHeight="1.25rem"
              color={theme.palette.common.black}
              onClick={() => handleLogout()}
            >
              {translation.login.logout}
            </Typography>
          </Stack>
          <Divider />
        </>
      )}
      <Divider />
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={2}
        sx={{ padding: theme.spacing(2.5, 1.875) }}
      >
        {menuItems.map((item: { link: string; text: string }) => (
          <MenuItem key={item.link} link={item.link} text={item.text} onClick={onToggle} />
        ))}
      </Stack>
      <Divider />
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={2}
        sx={{ padding: theme.spacing(2.5, 1.875), ...typographyStyles }}
      >
        <MuiLink href={`tel:${shortPhone}`} sx={{ textDecoration: 'none' }}>
          <Stack flexDirection="row" gap="10px" alignItems="center">
            <Image src={phoneLightFillIconUrl} alt="phone icon" />
            <Stack sx={{ marginTop: 0 }}>
              <Typography fontWeight={400} fontSize="0.875rem" lineHeight="1.25rem" color={theme.palette.common.black}>
                {fullPhone}
              </Typography>
            </Stack>
          </Stack>
        </MuiLink>
        <Stack flexDirection="row" gap="10px" alignItems="center">
          <Image src={timeLightFillIconUrl} alt="phone icon" />
          <Stack sx={{ marginTop: 0 }}>
            <Typography fontWeight={400} fontSize="0.875rem" lineHeight="1.25rem">
              Lunes a viernes, 09:00 - 16:00
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Drawer>
  );
};
