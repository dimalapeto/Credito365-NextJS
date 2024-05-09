'use client';
import { useState, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// import * as Sentry from '@sentry/react';
import translation from '@/i18n/translation.json';
import { useTheme, Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { clearStorageSession, cropUserName } from '@/utils';
import { useAppSelector, useAppDispatch, selectUser, updateUserAction, updateUserAuthentication } from '@/store';
import personIconUrl from '@/assets/person.svg?url';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { userInfo } = useAppSelector(selectUser);
  const userName = userInfo.first_name ? cropUserName(userInfo.first_name) : translation.user;

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    isDesktop && setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearStorageSession();
    dispatch(updateUserAction({ user: { id: 0, username: '' } }));
    dispatch(updateUserAuthentication(false));
    // Sentry.setUser(null);
    router.push('/dashboard');
    handleClose();
  };

  return (
    <>
      <Button
        size="small"
        variant="outlined"
        startIcon={<Image src={personIconUrl} alt="person icon" />}
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        sx={{
          borderRadius: '3.125rem',
          padding: '0.5rem 0.75rem',
          backgroundColor: '#F7F7FA',
          borderColor: '#F7F7FA',
          ':hover': { backgroundColor: '#E9E9E9', borderColor: '#E9E9E9' },
        }}>
        {userName}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }}>
        <MenuItem
          onClick={() => {
            handleLogout();
          }}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{translation.login.logout}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
