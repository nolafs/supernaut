import { render } from '@testing-library/react';

import ContentProfileList from './content-profile-list';

describe('ContentProfileList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentProfileList />);
    expect(baseElement).toBeTruthy();
  });
});
