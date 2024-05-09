'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme, AppBar, Container, Toolbar, Stack, Box, IconButton } from '@mui/material';
import { Logo, CallCenterLink, MobileMenu, MenuItem } from './components';
import { UserMenu } from '../UserMenu';
import { LoginButton } from '../LoginButton';
import { useAppSelector, selectUser } from '@/store';
import { menuItems } from '@/constants';
import MenuIcon from '@/assets/menu.svg';
import CloseIcon from '@/assets/close.svg';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const theme = useTheme();
  const pathname = usePathname();
  const { authenticated } = useAppSelector(selectUser);

  const appBarStyles = {
    backgroundColor: '#fefefe',
    border: 'none',
    borderBottom: '1px solid #f7f7fa',
    position: 'relative',
    zIndex: theme.zIndex.drawer + 1,
  };
  const menuStyles = {
    flexGrow: 1,
    display: { xs: 'none', lg: 'flex' },
    justifyContent: 'center',
    gap: '0.75rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
  };

  const hideLogin = pathname.includes('registration') || pathname.includes('login') || pathname.includes('take-loan');

  const showMenuBtn = () => {
    if (hideLogin) {
      return null;
    }
    return authenticated ? <UserMenu /> : <LoginButton />;
  };

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" variant="outlined" elevation={0} sx={appBarStyles}>
        <Container>
          <Toolbar
            disableGutters
            component={Stack}
            justifyContent="space-between"
            flexDirection="row"
            // sx={{ height: '80px' }}
            sx={{ minHeight: { xs: '34px', lg: '49px' }, padding: { xs: '8px 0', lg: '18px 0' } }}
          >
            <Logo />
            <Box sx={menuStyles}>
              {menuItems.map((item: { link: string; text: string }) => (
                <MenuItem key={item.link} link={item.link} text={item.text} isMobile={false} />
              ))}
            </Box>
            <Stack flexDirection="row" justifyContent="space-between" alignItems="center" gap={2}>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                <CallCenterLink />
              </Box>
              {showMenuBtn()}
              <IconButton
                sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, padding: 0 }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuToggle}
                color="inherit"
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
        {/* <MobileMenu open={mobileOpen} onToggle={handleMenuToggle} /> */}
      </AppBar>
      <MobileMenu open={mobileOpen} onToggle={handleMenuToggle} />
    </>
  );
};
