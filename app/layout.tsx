import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Stack, Box } from '@mui/material';
import { Suspense } from 'react';
import './globals.css';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { isProd } from '@/utils';
import ReduxProvider from './redux-provider';
import LocalizationProvider from './localization-provider';
import { StaticHeader, Header, Footer, Analytics } from '@/components';
import { metadataProduction, metadataDevelopment } from '@/constants';

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'auto',
  style: 'normal',
  preload: true,
});

export const metadata: Metadata = isProd ? metadataProduction : metadataDevelopment;

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="es" className="notranslate" translate="no">
      <head>
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_JUICYSCORE_ORIGIN} />
        <meta name="google" content="notranslate" />
        {isProd && <meta name="facebook-domain-verification" content="0a98mxwcisbjw4qz33s1u98fd3ayyw" />}
      </head>
      <body className={dmSans.className}>
        <Suspense>
          <Analytics />
          <LocalizationProvider>
            <ReduxProvider>
              <ThemeRegistry options={{ key: 'mui-theme' }}>
                <Stack sx={{ height: '100vh', justifyContent: 'space-between' }}>
                  <Box sx={{ position: 'relative' }}>
                    <StaticHeader />
                    <Header />
                  </Box>
                  <Stack component="main" justifyContent="flex-start" flex="1 0">
                    {children}
                  </Stack>
                  <Footer />
                </Stack>
              </ThemeRegistry>
            </ReduxProvider>
          </LocalizationProvider>
        </Suspense>
      </body>
    </html>
  );
}
