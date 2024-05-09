import { Stack } from '@mui/material';
import Link from 'next/link';

export const DevMenu = () => {
  const linksStyles = {
    color: 'white',
  };

  return (
    <Stack gap="10px" flexDirection="row">
      <Link style={linksStyles} href="/user/account">
        Account
      </Link>
      <Link style={linksStyles} href="/user/login">
        Login
      </Link>
      <Link style={linksStyles} href="/user/registration">
        Registration
      </Link>
    </Stack>
  );
};
