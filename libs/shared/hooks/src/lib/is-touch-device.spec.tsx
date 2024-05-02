import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useIsTouchDevice from './is-touch-device';

describe('useIsTouchDevice', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useIsTouchDevice());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
