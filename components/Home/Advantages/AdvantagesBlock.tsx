import Image from 'next/image';
import { Box, Stack, Container, Typography } from '@mui/material';
import * as S from './style';
import { AdvantagesItem } from './AdvantageItem';
import advantagesImage from '@/assets/mx_advantages.webp';

export const AdvantagesBlock = (): JSX.Element => {
  return (
    <Box component="section" sx={S.container}>
      <Container sx={{ paddingX: 0 }}>
        <Stack sx={S.blockLayout}>
          <Box sx={S.blockSide}>
            <Typography component="h2" fontWeight={700} lineHeight="130%" sx={S.title}>
              Nuestras ventajas
            </Typography>
            <Stack gap="20px">
              <AdvantagesItem title="Condiciones claras y sencillas">
                <Box>
                  <Typography lineHeight="1.3125rem" sx={{ color: '#282828', marginBottom: '16px' }}>
                    ¡Sin cuotas escondidas!
                  </Typography>
                  <Typography lineHeight="1.3125rem">
                    Somos totalmente transparentes en nuestro proceso de solicitud y obtención de préstamos para
                    brindarte una solución de forma rápida y eficaz.
                  </Typography>
                </Box>
              </AdvantagesItem>
              <AdvantagesItem title="Obtén dinero en 10 minutos">
                <Typography lineHeight="1.3125rem">
                  Nuestro equipo de servicio tomará rápidamente una decisión sobre tu microcrédito. ¡El dinero se
                  acreditará en tu tarjeta al instante!
                </Typography>
              </AdvantagesItem>
              <AdvantagesItem title="No puedes pagar a tiempo, te brindamos una solución!">
                <Typography lineHeight="1.3125rem">
                  Puedes pagar el microcrédito antes de la fecha prevista o aplazar la fecha de pago, pagando solo
                  intereses.
                </Typography>
              </AdvantagesItem>
            </Stack>
          </Box>
          <Box sx={S.blockSide}>
            <Image src={advantagesImage} alt="advantages image" style={S.image} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
