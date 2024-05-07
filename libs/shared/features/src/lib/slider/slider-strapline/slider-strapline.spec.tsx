import { render } from '@testing-library/react';

import SliderStrapline from './slider-strapline';

describe('SliderStrapline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SliderStrapline strapline={'test'} />);
    expect(baseElement).toBeTruthy();
  });
});
