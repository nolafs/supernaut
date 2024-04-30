import { render } from '@testing-library/react';

import LinkPrimary from './link-primary';

describe('LinkPrimary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkPrimary />);
    expect(baseElement).toBeTruthy();
  });
});
