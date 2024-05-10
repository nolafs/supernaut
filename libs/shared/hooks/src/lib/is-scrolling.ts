import {useState, useEffect} from 'react';

// Helper function to debounce any function
function debounce(func: (...args: any[]) => void, delay: number): () => void {
  let debounceTimer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]): void {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Custom hook for detecting scroll start and stop
export function useScrollDetection(onScrollStart: () => void, onScrollStop: () => void, delay = 250): void {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Function to call when scrolling starts
    function handleScrollStart(): void {
      if (!isScrolling) {
        onScrollStart();
        setIsScrolling(true);
      }
    }

    // Debounced function to call when scrolling stops
    const handleScrollStop = debounce(() => {
      onScrollStop();
      setIsScrolling(false);
    }, delay);

    // Event listeners for scroll start and stop
    window.addEventListener('scroll', handleScrollStart);
    window.addEventListener('scroll', handleScrollStop);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('scroll', handleScrollStop);
    };
  }, [onScrollStart, onScrollStop, delay, isScrolling]);
}

export default useScrollDetection;
