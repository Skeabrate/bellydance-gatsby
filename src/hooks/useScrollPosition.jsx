import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => setPosition(window.scrollY));

    return () => document.removeEventListener('scroll', () => {});
  }, []);

  return { position };
};
