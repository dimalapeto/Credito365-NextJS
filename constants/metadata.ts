import { WEBSITE_URL } from '@/constants';

export const metadataProduction = {
  metadataBase: new URL(WEBSITE_URL),
  title: 'Prestamos en linea: Pedir prestamo online rapido. Préstamo inmediato online - Credito365',
  description: 'Prestamo en linea en Mexico. Prestamo personal online para cualquier necesidad en Credito 365.',
  openGraph: {
    locale: 'es_ES',
    type: 'website',
    url: WEBSITE_URL,
    title: 'Prestamos en linea: Pedir prestamo online rapido. Préstamo inmediato online - Credito365',
    description: 'Prestamos en linea: Pedir prestamo online rapido. Préstamo inmediato online - Credito365',
    siteName: 'Credito365',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: { canonical: WEBSITE_URL },
  viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
  twitter: {
    card: 'summary_large_image',
    title: 'Prestamos en linea: Pedir prestamo online rapido. Préstamo inmediato online - Credito365',
    description: 'Prestamo en linea en Mexico. Prestamo personal online para cualquier necesidad en Credito 365.',
  },
};

export const metadataDevelopment = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Credito365',
  description: 'Prestamo en linea en Mexico. Prestamo personal online para cualquier necesidad en Credito 365.',
  viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
  robots: 'noindex, nofollow',
};
