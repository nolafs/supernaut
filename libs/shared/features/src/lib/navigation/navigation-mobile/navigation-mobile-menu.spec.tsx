import { render } from '@testing-library/react';

import NavigationMobileMenu from './navigation-mobile-menu';

describe('NavigationMobileMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationMobileMenu items={[]} open={false} />);
    expect(baseElement).toBeTruthy();
  });
});
