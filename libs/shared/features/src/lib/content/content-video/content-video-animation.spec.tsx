import { render } from '@testing-library/react';

import ContentVideoAnimation from './content-video-animation';

describe('ContentVideoAnimation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentVideoAnimation />);
    expect(baseElement).toBeTruthy();
  });
});
