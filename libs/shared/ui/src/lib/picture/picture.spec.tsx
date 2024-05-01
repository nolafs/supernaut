import { render } from '@testing-library/react';

import Picture from './picture';

describe('Picture', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Picture />);
    expect(baseElement).toBeTruthy();
  });
});
