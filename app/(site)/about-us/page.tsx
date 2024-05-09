import type { Metadata } from 'next';
import { Box, Typography, List, ListItem } from '@mui/material';
import { WEBSITE_URL } from '@/constants';
import * as S from './style';

export const metadata: Metadata = {
  title: 'Sobre nosotros - información sobre la empresa Credito365',
  description: 'Breve información sobre qué ventajas tiene Credito 365 y qué hace',
  openGraph: {
    type: 'article',
    url: `${WEBSITE_URL}/about-us`,
    title: 'Sobre nosotros - información sobre la empresa Credito365',
    description: 'Breve información sobre qué ventajas tiene Credito 365 y qué hace',
  },
  alternates: { canonical: `${WEBSITE_URL}/about-us` },
};

export default function About(): JSX.Element {
  return (
    <Box component="section" sx={S.text}>
      <Box sx={S.container}>
        <Box sx={S.textWrap}>
          <Typography variant="h3" sx={S.title}>Historia de Credito+365</Typography>
          <Typography variant="body1" sx={S.paragraph}>
            Nos empeñamos en brindar a nuestros clientes una solución ante la necesidad de obtener dinero urgente con la mayor rapidez.
          </Typography>
          <Typography variant="body1" sx={S.paragraph}>
            <strong>Reflejamos nuestros valores</strong> en cada acción que realizamos, por ello mismo nos manejamos ante nuestros clientes con:
          </Typography>
          <List sx={S.list}>
            <ListItem sx={S.listItem} disableGutters>Honestidad</ListItem>
            <ListItem sx={S.listItem} disableGutters>Confianza</ListItem>
            <ListItem sx={S.listItem} disableGutters>Compromiso</ListItem>
          </List>
          <Typography variant="body1" sx={S.paragraph}>
            Por lo cuál nuestra tasa de interés siempre es visible, préstamos son sin comisiones, letras chiquitas o costos ocultos.
          </Typography>
          <Typography variant="body1" sx={S.paragraph}>
            &nbsp;
          </Typography>
          <Typography variant="body1" sx={S.paragraph}>
            <strong>Las ventajas de Credito+365</strong>
          </Typography>
          <List sx={S.list}>
            <ListItem sx={S.listItem} disableGutters>Disponibilidad de nuestros servicios 24/7</ListItem>
            <ListItem sx={S.listItem} disableGutters>Facilidad y rapidez en nuestra plataforma</ListItem>
            <ListItem sx={S.listItem} disableGutters>En menos de 5 minutos obtendrás una respuesta a tu solicitud</ListItem>
            <ListItem sx={S.listItem} disableGutters>El uso de tus datos personales es con total seguridad y tratados confidencialmente</ListItem>
            <ListItem sx={S.listItem} disableGutters>Recibirás tu dinero una vez que haya sido aprobada tu solicitud y se depositará en la cuenta registrada en un lapso menor a 10 minutos.</ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
