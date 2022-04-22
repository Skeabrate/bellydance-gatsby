import { useState, useEffect } from 'react';
import { throttle } from 'utils/throttle';

export const useHideNav = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [hideNav, setHideNav] = useState(false);

  let lastScrollTop = 0;

  const handleScroll = throttle(() => {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st < 50) setIsOnTop(true);
    else setIsOnTop(false);

    if (st > lastScrollTop && st > 50) {
      setHideNav(true);
    } else setHideNav(false);

    lastScrollTop = st <= 0 ? 0 : st;
  }, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { isOnTop, hideNav };
};
