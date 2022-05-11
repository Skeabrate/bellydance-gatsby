import { useState, useEffect } from 'react';

export const useHideNav = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [hideNav, setHideNav] = useState(false);
  const [position, setPosition] = useState(0);

  let lastScrollTop = 0;

  const handleScroll = () => {
    setPosition(window.scrollY);
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st < 50) setIsOnTop(true);
    else setIsOnTop(false);

    if (st > lastScrollTop && st > 50) {
      setHideNav(true);
    } else setHideNav(false);

    lastScrollTop = st <= 0 ? 0 : st;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { isOnTop, hideNav, position };
};
