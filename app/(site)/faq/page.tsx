import type { Metadata } from 'next';
import { List, ListItem, Typography } from '@mui/material';
import { WEBSITE_URL } from '@/constants';
import { FaqAccordion } from '@/components';
import * as S from './style';

export const metadata: Metadata = {
  title: 'FAQ: Preguntas más frecuentes - Credito365',
  description: 'Las preguntas más comunes sobre la obtención de un préstamo en nuestra empresa',
  openGraph: {
    type: 'article',
    url: `${WEBSITE_URL}/faq`,
    title: 'FAQ: Preguntas más frecuentes - Credito365',
    description: 'Las preguntas más comunes sobre la obtención de un préstamo en nuestra empresa',
  },
  alternates: { canonical: `${WEBSITE_URL}/faq` },
};

export default function FAQ(): JSX.Element {
  return (
    <>
      <FaqAccordion title="¿Por qué declinaron mi préstamo?">
        <Typography variant="body1" sx={S.paragraph}>
          Llevamos a cabo un proceso de validación, dentro del cuál cuando inicias con el proceso de solicitud debes llenar de forma correcta cada campo. A continuación te daremos un par de ejemplos:
        </Typography>
        <List sx={S.list}>
          <ListItem sx={S.listItem} disableGutters>Mala captura de documentos</ListItem>
          <ListItem sx={S.listItem} disableGutters>Validación incorrecta de identidad</ListItem>
          <ListItem sx={S.listItem} disableGutters>Error en datos bancarios</ListItem>
          <ListItem sx={S.listItem} disableGutters>Otros (Riesgos internos en nuestra póliza)</ListItem>
        </List>
      </FaqAccordion>
      <FaqAccordion title="¿Cuáles son los requisitos para solicitar un préstamo?">
        <List sx={S.list}>
          <ListItem sx={S.listItem} disableGutters>Tener más de 18 años</ListItem>
          <ListItem sx={S.listItem} disableGutters>INE</ListItem>
          <ListItem sx={S.listItem} disableGutters>CURP</ListItem>
          <ListItem sx={S.listItem} disableGutters>Cuenta bancaria a nombre del solicitante</ListItem>
        </List>
      </FaqAccordion>
      <FaqAccordion title="¿Qué sucede si no pago a tiempo mi préstamo?">
        <Typography variant="body1" sx={S.paragraph}>
          Puedes realizar un pago mínimo por la cantidad asignada, de esta forma podrás prolongar tu préstamo y pagar después.
        </Typography>
      </FaqAccordion>
      <FaqAccordion title="¿Cómo puedo obtener más dinero?">
        <Typography variant="body1" sx={S.paragraph}>
          Pagando en tiempo lograrás incrementar tu límite y tener buen historial.
        </Typography>
      </FaqAccordion>
    </>
  );
}
