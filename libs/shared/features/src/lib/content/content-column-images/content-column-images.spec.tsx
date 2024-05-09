import { render } from '@testing-library/react';

import ContentColumnImages from './content-column-images';

describe('ContentColumnImages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentColumnImages columnsSm={0} columnsLg={0} columnsMd={0} title={'test'} items={[]}  />);
    expect(baseElement).toBeTruthy();
  });
});
