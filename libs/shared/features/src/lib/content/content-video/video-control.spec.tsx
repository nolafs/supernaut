import { render } from '@testing-library/react';

import VideoControl from './video-control';

describe('VideoControl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VideoControl />);
    expect(baseElement).toBeTruthy();
  });
});
