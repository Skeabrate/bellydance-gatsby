import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import NavigationItems from './NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';

import { Wrapper, StyledLogo } from './Navigation.styles';

const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    const [isOnTop, setIsOnTop] = useState(true);
    const [hideNav, setHideNav] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    const location = useLocation();

    const handleCloseMenu = () => setToggle(!toggle);

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;

        var lastScrollTop = 0;

        window.addEventListener(
            'scroll',
            function () {
                var st =
                    window.pageYOffset || document.documentElement.scrollTop;

                if (st < 40) setIsOnTop(true);
                else setIsOnTop(false);

                if (st > lastScrollTop) {
                    if (lastScrollTop > 40) {
                        setHideNav(true);
                    }
                } else setHideNav(false);

                lastScrollTop = st <= 0 ? 0 : st;
            },
            { signal: signal }
        );

        return () => abortController.abort();
    }, []);

    useEffect(() => {
        if (location.pathname === '/') setChangeColor(true);
        else setChangeColor(false);
    }, [location.pathname]);

    return (
        <Wrapper hideNav={hideNav} isOnTop={isOnTop}>
            <StyledLogo to="/" isOnTop={isOnTop} changeColor={changeColor}>
                <header>
                    <h1>Leyla Bellydance</h1>
                </header>
            </StyledLogo>

            <NavigationItems
                isOnTop={isOnTop}
                changeColor={changeColor}
                handleCloseMenu={handleCloseMenu}
            />

            <Hamburger
                handleCloseMenu={handleCloseMenu}
                isOnTop={isOnTop}
                changeColor={changeColor}
            />
        </Wrapper>
    );
};

export default Navigation;
