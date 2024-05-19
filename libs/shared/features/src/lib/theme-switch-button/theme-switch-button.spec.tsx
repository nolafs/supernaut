import { render } from '@testing-library/react';

import ThemeSwitchButton from './theme-switch-button';

describe('ThemeSwitchButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeSwitchButton />);
    expect(baseElement).toBeTruthy();
  });
});
