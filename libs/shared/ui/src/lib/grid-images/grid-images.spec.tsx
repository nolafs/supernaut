import { render } from '@testing-library/react';

import GridImages from './grid-images';

describe('GridImages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GridImages />);
    expect(baseElement).toBeTruthy();
  });
});
