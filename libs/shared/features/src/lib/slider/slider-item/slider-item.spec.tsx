import { render } from '@testing-library/react';

import SliderItem from './slider-item';

describe('SliderItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SliderItem />);
    expect(baseElement).toBeTruthy();
  });
});
