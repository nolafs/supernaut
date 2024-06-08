import { render } from '@testing-library/react';

import ContentRichText from './content-rich-text';

describe('ContentRichText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentRichText />);
    expect(baseElement).toBeTruthy();
  });
});
