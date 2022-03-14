import React, { useState, useEffect } from 'react';
import SlideNav from './SlideNav/SlideNav';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';

import {
    Wrapper,
    StyledLogo,
    StyledNav,
    StyledNavItem,
    StyledHamburger,
} from './Navigation.styles';

const activeLinkStyles = {
    textDecoration: 'underline',
};

const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    const [isOnTop, setIsOnTop] = useState(true);
    const [hideNav, setHideNav] = useState(false);

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

                if (st < 20) setIsOnTop(true);
                else setIsOnTop(false);

                if (st > lastScrollTop) {
                    if (lastScrollTop > 20) {
                        setHideNav(true);
                    }
                } else setHideNav(false);

                lastScrollTop = st <= 0 ? 0 : st;
            },
            { signal: signal }
        );

        return () => abortController.abort();
    }, []);

    return (
        <>
            <Wrapper hideNav={hideNav} isOnTop={isOnTop}>
                <StyledLogo to="/">
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
                            >
                                Home
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledNavItem
                                to="/aktualnosci"
                                activeStyle={activeLinkStyles}
                            >
                                Aktualności
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledNavItem
                                to="/pokazy"
                                activeStyle={activeLinkStyles}
                            >
                                Pokazy
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledNavItem
                                to="/zajecia"
                                activeStyle={activeLinkStyles}
                            >
                                Zajęcia
                            </StyledNavItem>
                        </li>
                        <li>
                            <StyledNavItem
                                to="/kontakt"
                                activeStyle={activeLinkStyles}
                            >
                                Kontakt
                            </StyledNavItem>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/agnieszka.swieczkowska.9"
                            >
                                <Facebook />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/bellydance_leyla/"
                            >
                                <Instagram />
                            </a>
                        </li>
                    </ul>
                </StyledNav>

                <StyledHamburger onClick={handleCloseMenu}>
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
