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

const CalculatorBlock = async (): Promise<React.JSX.Element> => {
  const shortPriceList = await getData(false);
  const fullPriceList = await getData(true);
  return <LoanCalculator shortPriceList={shortPriceList} fullPriceList={fullPriceList} />;
};

export default CalculatorBlock;
