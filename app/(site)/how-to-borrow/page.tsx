import type { Metadata } from 'next';
import { WEBSITE_URL } from '@/constants';
import { Typography } from '@mui/material';
import { HowToBorrowStep } from '@/components';

export const metadata: Metadata = {
  title: 'Cómo solicitar un préstamo en Сredito 365',
  description: 'El procedimiento para solicitar un préstamo en la empresa Сredito365',
  openGraph: {
    type: 'article',
    url: `${WEBSITE_URL}/how-to-borrow`,
    title: 'Cómo solicitar un préstamo en Сredito 365',
    description: 'El procedimiento para solicitar un préstamo en la empresa Сredito365',
  },
  alternates: { canonical: `${WEBSITE_URL}/how-to-borrow` },
};

export default function HowToBorrow(): JSX.Element {
  return (
    <>
      <Typography marginBottom="1rem">
        El microcrédito online es una forma ideal de solucionar rápidamente una necesidad repentina de recursos económicos. Puedes obtener un micro préstamo de <strong>Credito+365</strong> en línea, desde tu casa o lugar de trabajo. No hay necesidad de acudir a nuestras oficinas. Simplemente visita nuestro sitio web a través de tu celular, laptop o tableta.
      </Typography>
      <HowToBorrowStep subtitle="Paso 1" title="Selecciona las condiciones y llena una solicitud">
        Llena una solicitud simple para que podamos tomar una decisión sobre tu micro crédito.
      </HowToBorrowStep>
      <HowToBorrowStep subtitle="Paso 2" title="Regístrate y espera una decisión">
        Llena los detalles y sube tus fotos. Dentro de 5 minutos te enviaremos un SMS con una solución.
      </HowToBorrowStep>
      <HowToBorrowStep subtitle="Paso 3" title="Elige los términos y firma el contrato con un código SMS.">
        Después de revisar la información, firma el contrato con un código SMS que será enviado a tu número celular.
      </HowToBorrowStep>
      <HowToBorrowStep subtitle="Paso 4" title="Recibe dinero en tu cuenta bancaria">
        Después de firmar el contrato, el dinero será acreditado en tu tarjeta o clabe interbancaria al instante!
      </HowToBorrowStep>
    </>
  );
}
