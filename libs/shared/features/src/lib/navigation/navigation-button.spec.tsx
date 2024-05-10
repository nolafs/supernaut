import { render } from '@testing-library/react';

import NavigationButton from './navigation-button';

describe('NavigationButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationButton item={{
      id: '1',
      pageName: 'https://www.facebook.com',
      slug: 'Facebook',
    }} />);
    expect(baseElement).toBeTruthy();
  });
});
