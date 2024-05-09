import Image from 'next/image';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import expantIconUrl from '@/assets/expand-icon.svg?url';
import * as S from './style';

interface FaqAccordionProps {
  title: string;
  children: React.ReactNode;
}

export const FaqAccordion = ({ title, children }: FaqAccordionProps): JSX.Element => {
  return (
    <Accordion component="section" sx={S.accordion}>
      <AccordionSummary
        expandIcon={<Image src={expantIconUrl} alt="expand icon" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={S.summary}
      >
        <Typography sx={S.title}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={S.details}>
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
