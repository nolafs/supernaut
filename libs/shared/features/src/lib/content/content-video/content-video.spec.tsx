import { render } from '@testing-library/react';

import ContentVideo from './content-video';

describe('ContentVideo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentVideo />);
    expect(baseElement).toBeTruthy();
  });
});
