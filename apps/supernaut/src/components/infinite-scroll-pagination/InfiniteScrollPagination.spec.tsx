import { render } from '@testing-library/react';

import InfiniteScrollPagination from './InfiniteScrollPagination';

describe('InfiniteScrollPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfiniteScrollPagination />);
    expect(baseElement).toBeTruthy();
  });
});
