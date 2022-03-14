import React from 'react';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';
import X from 'assets/images/SVG/x.svg';

import {
    Wrapper,
    StyledLogo,
    StyledNav,
    StyledNavItem,
    StyledCloseButton,
    StyledSocials,
} from './SlideNav.styles';

const activeLinkStyles = {
    textDecoration: 'underline',
};

const SlideNav = ({ toggle, handleCloseMenu }) => {
    return (
        <Wrapper toggle={toggle}>
            <StyledLogo to="/">
                <h1>Leyle Bellydance</h1>
            </StyledLogo>

            <StyledNav>
                <li>
                    <StyledNavItem to="/" activeStyle={activeLinkStyles}>
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
                    <StyledNavItem to="/pokazy" activeStyle={activeLinkStyles}>
                        Pokazy
                    </StyledNavItem>
                </li>
                <li>
                    <StyledNavItem to="/zajecia" activeStyle={activeLinkStyles}>
                        Zajęcia
                    </StyledNavItem>
                </li>
                <li>
                    <StyledNavItem to="/kontakt" activeStyle={activeLinkStyles}>
                        Kontakt
                    </StyledNavItem>
                </li>

                <StyledCloseButton>
                    <button onClick={handleCloseMenu}>
                        <X />
                    </button>
                </StyledCloseButton>
            </StyledNav>

            <StyledSocials>
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
            </StyledSocials>
        </Wrapper>
    );
};

export default SlideNav;
