'use client';
import { LocalizationProvider as Provider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';
import dayjs from 'dayjs';

dayjs.locale('es');

export default function LocalizationProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return <Provider dateAdapter={AdapterDayjs}>{children}</Provider>;
}
