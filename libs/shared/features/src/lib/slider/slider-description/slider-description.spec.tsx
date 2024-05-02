import { render } from '@testing-library/react';

import SliderDescription from './slider-description';

describe('SliderDescription', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SliderDescription />);
    expect(baseElement).toBeTruthy();
  });
});
