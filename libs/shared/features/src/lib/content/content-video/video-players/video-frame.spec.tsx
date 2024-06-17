import { render } from '@testing-library/react';

import VideoFrame from './video-frame';

describe('VideoFrame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VideoFrame />);
    expect(baseElement).toBeTruthy();
  });
});
