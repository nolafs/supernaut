import { render } from '@testing-library/react';

import NavigationWrapper from './navigation-wrapper';

describe('NavigationWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
