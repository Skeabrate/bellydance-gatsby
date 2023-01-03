import { useState, useEffect, useMemo } from 'react';

export const useAnimation = ({ ref, treshold = 0, rootMargin = '0px 0px 0px 0px' }) => {
  const [isElementVisible, setIsElementVisible] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      const bcr = entry.boundingClientRect;
      const bcrWithTreshold = bcr.bottom - treshold;
      const isBottomVisible = bcrWithTreshold < window.innerHeight && bcrWithTreshold;

      if (isBottomVisible) setIsElementVisible(true);
      else setIsElementVisible(false);
    });
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin,
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

  return { isElementVisible };
};
