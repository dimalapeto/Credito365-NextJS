'use client';
import Link from 'next/link';
import Image from 'next/image';
// import * as Sentry from '@sentry/react';
import { Button } from '@mui/material';
import translation from '@/i18n/translation.json';
import { useAppSelector, useAppDispatch, selectUser, updateUserAction, updateUserAuthentication } from '@/store';
import { isAlreadyAuthorized, clearStorageSession } from '@/utils';
import loginIconUrl from '@/assets/login.svg?url';

export const LoginButton = () => {
  const dispatch = useAppDispatch();
  const { authenticated } = useAppSelector(selectUser);

  const handleClick = () => {
    if (!authenticated && isAlreadyAuthorized()) {
      clearStorageSession();
      dispatch(updateUserAction({ user: { id: 0, username: '' } }));
      dispatch(updateUserAuthentication(false));
      // Sentry.setUser(null);
    }
  };

  return (
    <Button
      component={Link}
      href="/user/login"
      size="small"
      variant="outlined"
      startIcon={<Image src={loginIconUrl} alt="login icon" />}
      aria-controls="login-button"
      onClick={handleClick}
      color="inherit"
      sx={{
        borderRadius: '3.125rem',
        padding: '0.5rem 0.75rem',
        backgroundColor: '#F7F7FA',
        borderColor: '#F7F7FA',
        ':hover': { backgroundColor: '#E9E9E9', borderColor: '#E9E9E9' },
      }}
    >
      {translation.login.login}
    </Button>
  );
};
