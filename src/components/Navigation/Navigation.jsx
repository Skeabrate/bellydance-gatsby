import React, { useState, useEffect } from 'react';
import SlideNav from './SlideNav/SlideNav';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';
import { useLocation } from '@reach/router';

import {
    Wrapper,
    StyledLogo,
    StyledNav,
    StyledNavItem,
    StyledHamburger,
    StyledSocials,
} from './Navigation.styles';

const activeLinkStyles = {
    textDecoration: 'underline',
    textUnderlineOffset: '0.05em',
};

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
        <>
            <Wrapper hideNav={hideNav} isOnTop={isOnTop}>
                <StyledLogo to="/" isOnTop={isOnTop} changeColor={changeColor}>
                    <header>
                        <h1>Leyla Bellydance</h1>
                    </header>
                </StyledLogo>

                <StyledNav>
                    <ul>
                        <li>
                            <StyledNavItem
                                to="/"
                                activeStyle={activeLinkStyles}
                                isOnTop={isOnTop}
                                changeColor={changeColor}
                            >
                                Home
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledNavItem
                                to="/aktualnosci"
                                activeStyle={activeLinkStyles}
                                isOnTop={isOnTop}
                                changeColor={changeColor}
                            >
                                Aktualności
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledNavItem
                                to="/pokazy"
                                activeStyle={activeLinkStyles}
                                isOnTop={isOnTop}
                                changeColor={changeColor}
                            >
                                Pokazy
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledNavItem
                                to="/zajecia"
                                activeStyle={activeLinkStyles}
                                isOnTop={isOnTop}
                                changeColor={changeColor}
                            >
                                Zajęcia
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledNavItem
                                to="/kontakt"
                                activeStyle={activeLinkStyles}
                                isOnTop={isOnTop}
                                changeColor={changeColor}
                            >
                                Kontakt
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledSocials
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/agnieszka.swieczkowska.9"
                                isOnTop={isOnTop}
                                changeColor={changeColor}
                            >
                                <Facebook />
                            </StyledSocials>
                        </li>
                        <li>
                            <StyledSocials
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/bellydance_leyla/"
                                isOnTop={isOnTop}
                                changeColor={changeColor}
                            >
                                <Instagram />
                            </StyledSocials>
                        </li>
                    </ul>
                </StyledNav>

                <StyledHamburger
                    onClick={handleCloseMenu}
                    isOnTop={isOnTop}
                    changeColor={changeColor}
                    aria-label="open navigation"
                >
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </StyledHamburger>
            </Wrapper>

            <SlideNav
                toggle={toggle}
                setToggle={setToggle}
                handleCloseMenu={handleCloseMenu}
            />
        </>
    );
};

export default Navigation;
