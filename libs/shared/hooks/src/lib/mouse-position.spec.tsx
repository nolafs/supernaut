import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useMousePosition from './mouse-position';

describe('useMousePosition', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useMousePosition());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
