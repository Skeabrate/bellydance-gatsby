import { useState, useEffect, useMemo } from 'react';

export const useAnimation = (ref) => {
  const [startAnimation, setStartAnimation] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) setStartAnimation(true);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '-20px',
      threshold: 1,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currRef = ref.current;
    if (currRef) observer.observe(currRef);

    return () => currRef && observer.unobserve(currRef);
  }, [ref, options]);

  return { startAnimation };
};
