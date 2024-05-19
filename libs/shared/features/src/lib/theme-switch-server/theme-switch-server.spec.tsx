import { render } from '@testing-library/react';

import ThemeSwitchServer from './theme-switch-server';

describe('ThemeSwitchServer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeSwitchServer />);
    expect(baseElement).toBeTruthy();
  });
});
