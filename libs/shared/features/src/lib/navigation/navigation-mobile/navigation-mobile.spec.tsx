import { render } from '@testing-library/react';

import NavigationMobile from './navigation-mobile';

describe('NavigationMobile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationMobile mode={'dark'} items={[]} siteTitle={'Supernaut'} logo={'/images/logo.svg'
    }/>);
    expect(baseElement).toBeTruthy();
  });
});
