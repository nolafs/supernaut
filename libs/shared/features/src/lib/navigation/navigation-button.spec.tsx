import { render } from '@testing-library/react';

import NavigationButton from './navigation-button';

describe('NavigationButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationButton />);
    expect(baseElement).toBeTruthy();
  });
});
