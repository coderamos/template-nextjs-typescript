import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBackgroundColor />
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  controls: { expanded: true },
  backgrounds: {
    default: 'secondary',
    values: [
      {
        name: 'primary',
        value: theme.colors.primary
      },
      {
        name: 'secondary',
        value: theme.colors.secondary
      },
      {
        name: 'black',
        value: theme.colors.black
      },
      {
        name: 'white',
        value: theme.colors.white
      }
    ]
  }
};
