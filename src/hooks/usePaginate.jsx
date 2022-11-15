import { useState, useEffect, useMemo } from 'react';

export const usePaginate = (data, loadingRef, postsPerPage = 8) => {
  const [postsCount, setPostsCount] = useState(postsPerPage);

  const currentData = data.slice(0, postsCount);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) setPostsCount((state) => state + postsPerPage);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currRef = loadingRef.current;

    if (currRef) observer.observe(currRef);

    return () => currRef && observer.unobserve(currRef);
  }, [options, loadingRef]);

  return { currentData };
};
