import { render } from '@testing-library/react';

import ContentList from './content-list';

describe('ContentList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentList />);
    expect(baseElement).toBeTruthy();
  });
});
