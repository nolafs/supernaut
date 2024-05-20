import { render } from '@testing-library/react';

import TransitionLink from './transition-link';

describe('TransitionLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TransitionLink />);
    expect(baseElement).toBeTruthy();
  });
});
