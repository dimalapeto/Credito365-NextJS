'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Stack, InputLabel, TextField, FormHelperText, Button } from '@mui/material';
import * as S from './style';
import translation from '@/i18n/translation.json';
import { MinusButton } from './MinusButton';
import { PlusButton } from './PlusButton';

interface PriceListItem {
  tenor: number;
  principal: number;
  interest: number;
  settlement_amount: number;
  maturity_date: string;
  discount: {
    principal: number;
    interest: number;
    settlement_amount: number;
  };
  commission?: number;
}

interface LoanCalculatorProps {
  shortPriceList: PriceListItem[];
  fullPriceList: PriceListItem[];
}

export const LoanCalculator = ({ shortPriceList, fullPriceList }: LoanCalculatorProps): JSX.Element => {
  const [selectedPrincipal, setSelectedPrincipal] = useState<string>('');
  const [maxPrincipalExceed, setMaxPrincipalExceed] = useState<boolean>(false);

  const tenorsValues: PriceListItem[] = Object.values(fullPriceList);
  const principals: string[] = Object.keys(tenorsValues[0]);
  const minPrincipal = principals ? principals[0] : 'N/D';
  const maxPrincipal = principals[principals.length - 1];
  const shortTenorsValues: PriceListItem[] = Object.values(shortPriceList);
  const shortPrincipals: string[] = Object.keys(shortTenorsValues[0]);
  const currentMaxPrincipal = shortPrincipals[shortPrincipals.length - 1];

  useEffect(() => {
    setSelectedPrincipal(currentMaxPrincipal);
  }, [currentMaxPrincipal]);

  const handlePlusPrincipal = () => {
    const currentIndex: number = shortPrincipals?.findIndex((i: string | number) => i === selectedPrincipal);
    if (currentIndex !== -1 && currentIndex < shortPrincipals.length - 1) {
      const nextValue = shortPrincipals[currentIndex + 1];
      setSelectedPrincipal(nextValue);
    } else {
      setMaxPrincipalExceed(true);
    }
  };

  const handleMinusPrincipal = () => {
    const currentIndex: number = shortPrincipals?.findIndex((i: string | number) => i === selectedPrincipal);
    if (currentIndex !== -1 && currentIndex > 0) {
      const nextValue = shortPrincipals[currentIndex - 1];
      if (Number(nextValue) <= Number(currentMaxPrincipal)) {
        setMaxPrincipalExceed(false);
      }
      setSelectedPrincipal(nextValue);
    }
  };

  return (
    <Stack flexDirection="column" justifyContent="space-between" gap="15px" sx={S.calculatorContainer}>
      <Stack flexDirection="column" justifyContent="flex-start" alignItems="flex-start" gap={1.25}>
        <InputLabel sx={S.calcTitle}>{translation.registration.loanAmount}</InputLabel>
        <TextField
          fullWidth
          autoComplete="off"
          value={`$ ${selectedPrincipal}`}
          inputProps={{ sx: S.calcInput }}
          InputProps={{
            startAdornment: <MinusButton onClick={handleMinusPrincipal} />,
            endAdornment: <PlusButton onClick={handlePlusPrincipal} />,
            sx: { padding: '0 0.625rem' },
            readOnly: true,
          }}
        />
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
          <FormHelperText sx={{ lineHeight: '1rem', fontWeight: 500 }}>{`$ ${minPrincipal}`}</FormHelperText>
          <FormHelperText sx={{ lineHeight: '1rem', fontWeight: 500 }}>{`$ ${maxPrincipal}`}</FormHelperText>
        </Stack>
        {maxPrincipalExceed && (
          <FormHelperText sx={{ lineHeight: '1rem' }}>{translation.errors.maxPrincipalError}</FormHelperText>
        )}
      </Stack>
      <Button
        component={Link}
        href="/user/registration"
        size="large"
        fullWidth
        variant="contained"
        aria-controls="registration-button"
        sx={{ padding: '13px' }}
      >
        {translation.site.takeCredit}
      </Button>
    </Stack>
  );
};
