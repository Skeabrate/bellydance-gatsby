import React, { useState } from 'react';
import SlideNav from './SlideNav/SlideNav';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';

import {
    Wrapper,
    StyledLogo,
    StyledNav,
    StyledNavItem,
} from './Navigation.styles';

const activeLinkStyles = {
    textDecoration: 'underline',
};

const Navigation = () => {
    const [toggle, setToggle] = useState(true);

    const handleCloseMenu = () => setToggle(!toggle);

    return (
        <>
            <Wrapper>
                <StyledLogo>
                    <h1>Leyla Bellydance</h1>
                </StyledLogo>

                <nav>
                    <StyledNav>
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
                            <Facebook />
                        </li>
                        <li>
                            <Instagram />
                        </li>
                    </StyledNav>
                </nav>
            </Wrapper>

            <SlideNav toggle={toggle} handleCloseMenu={handleCloseMenu} />
        </>
    );
};

export default Navigation;
