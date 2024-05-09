import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { palette } from './palette';
import { components } from './components';
import { typography } from './typography';

const themeOptions: ThemeOptions = {
  breakpoints,
  palette,
  components,
  typography,
};

export const theme = createTheme(themeOptions);
