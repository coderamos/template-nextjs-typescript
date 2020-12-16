import { addDecorator } from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import { withNextRouter } from 'storybook-addon-next-router';
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

import results from '../.jest-test-results.json';

export const parameters = {
  a11y: { disable: true },
  controls: { expanded: true },
  backgrounds: {
    default: 'white',
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
        name: 'white',
        value: theme.colors.white
      },
      {
        name: 'alternative',
        value: theme.colors.alternative
      }
    ]
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  }
};

addDecorator(withTests({ results }));
addDecorator(withNextRouter());
