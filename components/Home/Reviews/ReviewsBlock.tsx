'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme, Box, Stack, Button, IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import * as S from './style';
import { ReviewItem } from './ReviewItem';
import reviewsImage from '@/assets/mx_reviews.webp';
import caseIconUrl from '@/assets/case.svg?url';
import arrowIconUrl from '@/assets/arrow.svg?url';
import arrowDisabledIconUrl from '@/assets/arrow-disabled.svg?url';

export const ReviewsBlock = (): JSX.Element => {
  const [begin, setBegin] = useState<boolean>(true);
  const [end, setEnd] = useState<boolean>(false);
  const sliderRef = useRef<any>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box component="section" sx={S.container}>
      <Stack sx={S.blockLayout}>
        <Box sx={S.title}>¿Qué piensa la gente acerca de nosotros?</Box>
        <Box sx={S.sliderControls}>
          <IconButton onClick={() => sliderRef.current?.slidePrev()} size="large" sx={S.sliderControl}>
            <Image
              src={begin ? arrowDisabledIconUrl : arrowIconUrl}
              alt="arrow icon"
              style={{ transform: 'rotate(-180deg)' }}
            />
          </IconButton>
          <IconButton onClick={() => sliderRef.current?.slideNext()} size="large" sx={S.sliderControl}>
            <Image src={end ? arrowDisabledIconUrl : arrowIconUrl} alt="arrow icon" />
          </IconButton>
        </Box>
        <Box sx={S.reviewWrapper}>
          <Box sx={S.reviewBanner}>
            <Box component={Image} src={reviewsImage} alt="reviews image" sx={S.image} />
            <Button
              component={Link}
              href="/user/registration"
              size="large"
              variant="contained"
              aria-controls="registration-button"
              sx={S.imageBtn}
            >
              <Image src={caseIconUrl} alt="case icon" style={{ marginRight: '10px' }} />
              ¡El dinero se encuentra listo en tu cuenta!
            </Button>
          </Box>
          <Box sx={S.sliderContainer}>
            <Swiper
              onSlideChange={(swiper: SwiperProps) => {
                setBegin(swiper.isBeginning);
                setEnd(swiper.isEnd);
              }}
              onSwiper={(swiper: SwiperProps) => {
                setBegin(swiper.isBeginning);
                setEnd(swiper.isEnd);
                sliderRef.current = swiper;
              }}
              spaceBetween={30}
              slidesPerView={isDesktop ? 2 : 1}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <ReviewItem date="01/04" title="Buen servicio al cliente" author="Daniela Colin" rating={4}>
                  Fue una locura, estaba realizando mis visitas a clientes, ya que me dedico a la parte de ventas.
                  <br />
                  Ese día por andar corriendo como siempre, no me fije que había dejado estacionado el auto en un lugar
                  que no se podía, me pusieron una multa los policías. Gracias a dios que unos amigos me habían
                  platicado con anterioridad de Credito+365. Los contacte de inmediato y me dieron mi préstamo, con eso
                  pude pagar mi multa y evitarme corralón! Agradecida por la rapidez.
                </ReviewItem>
              </SwiperSlide>
              <SwiperSlide>
                <ReviewItem
                  date="02/04"
                  title="Si recibes el dinero en menos de 10 min!!"
                  author="Manuel Peña"
                  rating={4}
                >
                  Iba llegando del trabajo, llegue gritandole a Bruno (mi perrito) para decirle irnos a dar su paseo
                  diario.
                  <br />
                  Cuando lo encontre estaba desmayado y con la cara toda hinchada, me lo lleve corriendo al veterinario,
                  <br />
                  Pero para mi suerte mi quincena se retraso y no tenía con que pagar el doctor, total que de camino al
                  doctor marque a Credito+365 y y en lo que marcamos me habían depositado el dinero!!
                  <br />
                  díficil de creer! Pero gracias a ellos, le pude inyectar y dar el tratamiento necesario a mi perrito y
                  ahora esta aquí muy feliz con su paseo de nuevo.
                  <br />
                  Si no hubiera sido por ellos, no se que hubiera hecho.
                </ReviewItem>
              </SwiperSlide>
              <SwiperSlide>
                <ReviewItem date="03/04" title="Servicio demasiado útil" author="Diego Rodriguez" rating={3}>
                  Mi tarjeta fue bloqueada por 48 horas, me urgía usarla y mi banco no me brindaba ninguna solución.
                  <br />
                  Por suerte mi esposa me había platicado acerca de una empresa que te daba préstamos de inmediato, y
                  funciono!
                  <br />
                  Ese día nos saco de un apuro tremendo.
                </ReviewItem>
              </SwiperSlide>
              <SwiperSlide>
                <ReviewItem date="04/04" title="Buen servicio" author="Aime Castillo" rating={3.5}>
                  Del aprieto que me sacaron!
                  <br />
                  Normalmente hago uso de los servicios de LinkedIn, como publicidad o algún anuncio importante. Pero lo
                  que nunca me había pasado fue que esta vez por errores en plataforma, lo que debió haber sido un solo
                  cargo, se triplico!
                  <br />
                  Estaba mega molesta porque después de hacer la aclaración, mi dinero iba a ser regresado en 15 días
                  hábiles y para colmo fue a mi tarjeta de débito.
                  <br />
                  Me urgía el dinero para pagar otras cosas y moverme, entre en internet y me pareció buena idea aplicar
                  a un préstamo.
                  <br />
                  Maravilla que fue.
                </ReviewItem>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
