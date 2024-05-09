import Link from 'next/link';
import { Box, Stack, Container, Button } from '@mui/material';
import * as S from './style';
import { StepListItem } from './StepListItem';
import translation from '@/i18n/translation.json';

export const StepsBlock = (): JSX.Element => {
  return (
    <Box component="section" sx={S.container}>
      <Container sx={{ paddingX: 0 }}>
        <Stack sx={S.blockLayout}>
          <Box fontWeight={700} lineHeight="130%" sx={S.title}>
            Solicitar un préstamo es
            <br />
            Rápido y Fácil
          </Box>
          <Button
            component={Link}
            href="/user/registration"
            size="large"
            variant="contained"
            aria-controls="registration-button"
            sx={S.button}
          >
            {translation.site.takeCredit}
          </Button>
          <Box sx={S.stepsContainer}>
            <StepListItem title="Seleccione las condiciones y completa la solicitud" subtitle="Paso 1">
              Llena una solicitud sencilla para que podamos tomar una decisión sobre tu microcrédito
            </StepListItem>
            <StepListItem title="Registrate y espera nuestra pronta respuesta" subtitle="Paso 2">
              Llena los siguientes detalles y sube las fotos de tus documentos. Dentro de 5 minutos te enviaremos un SMS
              con una solución
            </StepListItem>
            <StepListItem title="Firma el contrato con el código SMS que recibirás" subtitle="Paso 3">
              Después de revisarlo, firma el contrato con el código SMS que enviaremos a tu celular
            </StepListItem>
            <StepListItem title="Obtén el dinero en una tarjeta o cuenta bancaria" subtitle="Paso 4">
              Después de firmar el contrato, el dinero se acreditará a tu tarjeta o a tu número de cuenta bancaria de
              forma instantánea.
            </StepListItem>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
