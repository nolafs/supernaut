import { render } from '@testing-library/react';

import ContentColumn from './content-column';

describe('ContentColumn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentColumn />);
    expect(baseElement).toBeTruthy();
  });
});
