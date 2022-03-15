import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';
import X from 'assets/images/SVG/x.svg';
import { globalHistory } from '@reach/router';

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
    textUnderlineOffset: '0.05em',
};

const SlideNav = ({
    toggle,
    setToggle = () => {},
    handleCloseMenu = () => {},
}) => {
    useEffect(() => {
        return globalHistory.listen(({ action }) => {
            if (action === 'PUSH') setToggle(false);
        });
    }, [setToggle]);

    return (
        <Wrapper toggle={toggle}>
            <StyledLogo to="/">
                <header>
                    <h1>Leyla Bellydance</h1>
                </header>
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
                    <button
                        onClick={handleCloseMenu}
                        aria-label="close navigation"
                    >
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

SlideNav.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
    handleCloseMenu: PropTypes.func.isRequired,
};

export default SlideNav;
