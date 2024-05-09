import type { Metadata } from 'next';
import { WEBSITE_URL } from '@/constants';
import { Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Devolución préstamo en Сredito 365',
  description: 'Reembolso del préstamo en la empresa Сredito 365 instrucciones detalladas paso a paso',
  openGraph: {
    type: 'article',
    url: `${WEBSITE_URL}/how-to-repay`,
    title: 'Devolución préstamo en Сredito 365',
    description: 'Reembolso del préstamo en la empresa Сredito 365 instrucciones detalladas paso a paso',
  },
  alternates: { canonical: `${WEBSITE_URL}/how-to-repay` },
};

export default function HowToRepay(): JSX.Element {
  return (
    <>
      <Typography marginBottom="1rem">
        Para poder realizar el pago de tu préstamo es necesario que des clic en <strong><em>iniciar sesión</em></strong> para acceder a tu cuenta, una vez que hayas ingresado tendrás las siguientes <strong><em>opciones de pago</em></strong>:
      </Typography>
      <Typography marginBottom="1rem">-Transferencia bancaria.</Typography>
      <Typography marginBottom="1rem">-Depósitos en efectivo.</Typography>
      <Typography marginBottom="1rem">-Tarjetas de débito o crédito.</Typography>
      <Typography>También tendrás la opción de recibir de forma automática y rápida un <strong><em>link de pago</em></strong> a través de un SMS tu número celular.</Typography>
    </>
  );
}
