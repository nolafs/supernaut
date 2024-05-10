import { render } from '@testing-library/react';

import ContentImages from './content-images';

describe('ContentImages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentImages />);
    expect(baseElement).toBeTruthy();
  });
});
