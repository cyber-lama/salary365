import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider } from 'emotion-theming';
import themeOptions from '../theme';

import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import '!style-loader!css-loader!sass-loader!../styles/globals.scss';

const theme1 = createTheme(themeOptions);

const providerFn = ({ theme, children }) => {
  const muTheme = createTheme(theme1);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [theme1], { providerFn }));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};
