import { render } from '@testing-library/react';

import LogoAnimated from './logo-animated';

describe('LogoAnimated', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogoAnimated />);
    expect(baseElement).toBeTruthy();
  });
});
