import React from 'react';
import PropTypes from 'prop-types';
import X from 'assets/images/SVG/x.svg';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';

import {
    Wrapper,
    StyledLogo,
    StyledNav,
    StyledLink,
    StyledCloseButton,
    StyledSocials,
} from './NavigationItems.styles';

const items = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Aktualności',
        path: 'aktualnosci',
    },
    {
        title: 'Pokazy',
        path: 'pokazy',
    },
    {
        title: 'Zajęcia',
        path: 'zajecia',
    },
    {
        title: 'Kontakt',
        path: 'kontakt',
    },
];

const activeLinkStyles = {
    textDecoration: 'underline',
    textUnderlineOffset: '0.05em',
};

const NavigationItems = ({ isOnTop, changeColor, handleCloseMenu }) => {
    return (
        <Wrapper>
            <StyledLogo to="/">
                <h1>Leyla Bellydance</h1>
            </StyledLogo>

            <StyledNav>
                {items.map(({ title, path }, index) => (
                    <li key={index}>
                        <StyledLink
                            to={path}
                            activeStyle={activeLinkStyles}
                            isOnTop={isOnTop}
                            changeColor={changeColor}
                        >
                            {title}
                        </StyledLink>
                    </li>
                ))}

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
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/agnieszka.swieczkowska.9"
                    isOnTop={isOnTop}
                    changeColor={changeColor}
                >
                    <Facebook />
                </a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/bellydance_leyla/"
                    isOnTop={isOnTop}
                    changeColor={changeColor}
                >
                    <Instagram />
                </a>
            </StyledSocials>
        </Wrapper>
    );
};

NavigationItems.propTypes = {
    handleCloseMenu: PropTypes.func,
    isOnTop: PropTypes.bool,
    changeColor: PropTypes.bool,
};

export default NavigationItems;
