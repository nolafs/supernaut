import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useIsFirstRender from './is-first-render';

describe('useIsFirstRender', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useIsFirstRender());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
