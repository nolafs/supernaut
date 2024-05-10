import { render } from '@testing-library/react';

import Vimeo from './vimeo';

describe('Vimeo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vimeo />);
    expect(baseElement).toBeTruthy();
  });
});
