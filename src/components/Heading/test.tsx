import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>Heading</Heading>);

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument();

    // expect(container.firstChild).toMatchSnapshot();
  });
});
