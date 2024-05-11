import { render } from '@testing-library/react';

import Vimeo from './vimeo';

describe('Vimeo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vimeo title={'test'} id={'1'} src={''} width={100} height={100} />);
    expect(baseElement).toBeTruthy();
  });
});
