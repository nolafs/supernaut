import { render } from '@testing-library/react';

import ContactFormDialogButton from './contact-form-dialog-button';

describe('ContactFormDialogButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactFormDialogButton />);
    expect(baseElement).toBeTruthy();
  });
});
