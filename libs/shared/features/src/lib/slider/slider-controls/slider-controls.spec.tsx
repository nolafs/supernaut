import { render } from '@testing-library/react';

import SliderControls from './slider-controls';

describe('SliderControls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SliderControls />);
    expect(baseElement).toBeTruthy();
  });
});
