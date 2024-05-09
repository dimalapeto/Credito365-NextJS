import { Stack, Typography } from '@mui/material';

interface StepListItemProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const StepListItem = ({ title, subtitle, children }: StepListItemProps): JSX.Element => {
  return (
    <Stack sx={{ padding: '25px 20px', background: '#fefefe', borderRadius: '10px', flex: '1 0' }}>
      <Typography fontSize="18px" fontWeight={700} lineHeight="120%" marginBottom="25px" sx={{ color: '#6948eb' }}>
        {subtitle}
      </Typography>
      <Typography fontSize="20px" fontWeight={700} lineHeight="130%">
        {title}
      </Typography>
      <Typography sx={{ color: '#282828' }} marginTop="20px" lineHeight="1.3125rem">
        {children}
      </Typography>
    </Stack>
  );
};
