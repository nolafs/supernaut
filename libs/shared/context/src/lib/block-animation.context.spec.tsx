import { render } from '@testing-library/react';

import BlockAnimationContext from './block-animation.context';

describe('BlockAnimationContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlockAnimationContext />);
    expect(baseElement).toBeTruthy();
  });
});
