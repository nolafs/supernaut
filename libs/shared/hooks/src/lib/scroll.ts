import { useState, useCallback, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

export function useScroll(): any {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (typeof window === 'undefined') {
        return setScrollPosition(0);
      }
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}

export default useScroll;
