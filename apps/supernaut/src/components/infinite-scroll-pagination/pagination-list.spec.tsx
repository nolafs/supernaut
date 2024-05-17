import { render } from '@testing-library/react';

import PaginationList from './pagination-list';

describe('PaginationList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaginationList />);
    expect(baseElement).toBeTruthy();
  });
});
