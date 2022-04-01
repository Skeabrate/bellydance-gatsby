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
    StyledSocialsItem,
} from './NavigationItems.styles';

const items = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Aktualności',
        path: '/aktualnosci',
    },
    {
        title: 'Pokazy',
        path: '/pokazy',
    },
    {
        title: 'Zajęcia',
        path: '/zajecia',
    },
    {
        title: 'Kontakt',
        path: '/kontakt',
    },
];

const activeLinkStyles = {
    textDecoration: 'underline',
    textUnderlineOffset: '0.05em',
};

const NavigationItems = ({
    toggle,
    isOnTop,
    changeColor,
    handleCloseMenu = () => {},
}) => {
    return (
        <Wrapper $toggle={toggle}>
            <StyledLogo to="/">
                <h1 translate="no">Leyla Bellydance</h1>
            </StyledLogo>

            <StyledNav>
                {items.map(({ title, path }) => (
                    <li key={title}>
                        <StyledLink
                            to={path}
                            activeStyle={activeLinkStyles}
                            $isOnTop={isOnTop}
                            $changeColor={changeColor}
                        >
                            {title}
                        </StyledLink>
                    </li>
                ))}

                <StyledCloseButton>
                    <button
                        onClick={handleCloseMenu}
                        aria-label="zamknij nawigację"
                    >
                        <X />
                    </button>
                </StyledCloseButton>
            </StyledNav>

            <StyledSocials>
                <StyledSocialsItem
                    title="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/agnieszka.swieczkowska.9"
                    $isOnTop={isOnTop}
                    $changeColor={changeColor}
                >
                    <Facebook />
                </StyledSocialsItem>

                <StyledSocialsItem
                    title="instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/bellydance_leyla/"
                    $isOnTop={isOnTop}
                    $changeColor={changeColor}
                >
                    <Instagram />
                </StyledSocialsItem>
            </StyledSocials>
        </Wrapper>
    );
};

NavigationItems.propTypes = {
    toggle: PropTypes.bool.isRequired,
    handleCloseMenu: PropTypes.func.isRequired,
    isOnTop: PropTypes.bool.isRequired,
    changeColor: PropTypes.bool.isRequired,
};

export default NavigationItems;
