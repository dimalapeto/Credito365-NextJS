import { Box, Stack, Container } from '@mui/material';
import * as S from './style';
import { Banner } from './Banner';
import { Title } from './Title';
import { LoanCalculator } from '@/components';

async function getData(isRepeatedLoan: boolean) {
  const endpoint = isRepeatedLoan
    ? `${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/p/product-price-list/pdl?is_repeated_loan=1`
    : `${process.env.NEXT_PUBLIC_API_ENTRYPOINT}/p/product-price-list/pdl?is_repeated_loan=0`;
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export const BannerBlock = async (): Promise<React.JSX.Element> => {
  const shortPriceList = await getData(false);
  const fullPriceList = await getData(true);
  return (
    <Box component="section" sx={S.container}>
      <Container sx={{ paddingX: 0 }}>
        <Stack sx={S.blockLayout}>
          <Box sx={S.bannerWrapper}>
            <Banner />
            <Title />
          </Box>
          <Box sx={S.calculatorWrapper}>
            <LoanCalculator shortPriceList={shortPriceList} fullPriceList={fullPriceList} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
