import { useState, useEffect, useMemo } from 'react';

export const useAnimation = (ref) => {
  const [startAnimation, setStartAnimation] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      const bcr = entry.boundingClientRect;
      const isBottomVisible = bcr.bottom < window.innerHeight && bcr.bottom;

      if (isBottomVisible) setStartAnimation(true);
    });
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '-20px',
      threshold: Array(11)
        .fill()
        .map((_, i) => i * 0.1),
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currRef = ref.current;

    setTimeout(() => {
      if (currRef) observer.observe(currRef);
    }, 1000);

    return () => currRef && observer.unobserve(currRef);
  }, [ref, options]);

  return { startAnimation };
};
