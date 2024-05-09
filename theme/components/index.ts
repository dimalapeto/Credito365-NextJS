import type { Components } from '@mui/material/styles/components';
import type { Theme } from '@mui/material/styles/createTheme';

import { MuiAppBar } from './AppBar';
import { MuiContainer } from './Container';
import { MuiOutlinedInput } from './OutlinedInput';
import { MuiInputBase } from './InputBase';
import { MuiButtonBase } from './ButtonBase';
import { MuiButton } from './Button';
import { MuiInputAdornment } from './InputAdornment';
import { MuiAlert } from './Alert';
import { MuiAlertTitle } from './AlertTitle';
import { MuiChip } from './Chip';
import { MuiTab } from './Tab';
import { MuiTabs } from './Tabs';
import { MuiCard } from './Card';
import { MuiCardContent } from './CardContent';
import { MuiFormLabel } from './FormLabel';

export const components: Components<Omit<Theme, 'components'>> = {
  MuiAppBar,
  MuiContainer,
  MuiOutlinedInput,
  MuiInputBase,
  MuiButtonBase,
  MuiButton,
  MuiInputAdornment,
  MuiAlert,
  MuiAlertTitle,
  MuiChip,
  MuiTab,
  MuiTabs,
  MuiCardContent,
  MuiCard,
  MuiFormLabel,
};
