import { render } from '@testing-library/react';

import TriggerResizeOnLoad from './TriggerResizeOnLoad';

describe('TriggerResizeOnLoad', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TriggerResizeOnLoad />);
    expect(baseElement).toBeTruthy();
  });
});
