import React, { useState } from 'react';
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

    const handleCloseMenu = () => setToggle(!toggle);

    return (
        <>
            <Wrapper>
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
