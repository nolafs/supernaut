import { useState, useCallback, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseIsTouchDevice {
  touch: boolean;
}

export function useIsTouchDevice(): UseIsTouchDevice {
  const [touch, setTouch] = useState<boolean>(false);

  useEffect(() => {
    // check if in browser
    if (typeof window === 'undefined') {
      return;
    }

    const maxTouchPoints = navigator.maxTouchPoints || 0;
    const msMaxTouchPoints = (navigator as any).msMaxTouchPoints || 0;

    setTouch(
      'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints ||
        0
    );
  }, []);

  return {
    touch,
  };
}

export default useIsTouchDevice;
