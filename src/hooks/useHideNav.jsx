import { useState, useEffect } from 'react';

export const useHideNav = () => {
    const [isOnTop, setIsOnTop] = useState(true);
    const [hideNav, setHideNav] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;

        let lastScrollTop = 0;

        window.addEventListener(
            'scroll',
            function () {
                let st =
                    window.pageYOffset || document.documentElement.scrollTop;

                if (st < 50) setIsOnTop(true);
                else setIsOnTop(false);

                if (st > lastScrollTop) {
                    if (lastScrollTop > 30) {
                        setHideNav(true);
                    }
                } else setHideNav(false);

                lastScrollTop = st <= 0 ? 0 : st;
            },
            { signal: signal }
        );

        return () => abortController.abort();
    }, []);

    return { isOnTop, hideNav };
};
