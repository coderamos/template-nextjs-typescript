import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

describe('<Home />', () => {
  it('should render the home', () => {
    renderWithTheme(<Home />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
