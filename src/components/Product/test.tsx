import { screen, render } from '@testing-library/react';

import { Product } from './';

describe('<Product />', () => {
  it('should render the heading', () => {
    const { container } = render(<Product title=''description='' price={0} urlImg='' />);

    expect(
      screen.getByRole('heading', { name: /Product/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
