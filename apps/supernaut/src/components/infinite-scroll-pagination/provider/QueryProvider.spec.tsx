import { render } from '@testing-library/react';

import QueryProvider from './QueryProvider';

describe('QueryProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QueryProvider />);
    expect(baseElement).toBeTruthy();
  });
});
