import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import NavigationItems from './NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';
import { useHideNav } from 'hooks/useHideNav';

import { Wrapper, StyledLogo } from './Navigation.styles';

const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    const [isOnTop, hideNav] = useHideNav();

    const location = useLocation();

    const handleCloseMenu = () => setToggle(!toggle);

    useEffect(() => {
        if (location.pathname === '/') setChangeColor(true);
        else setChangeColor(false);

        setToggle(false);
    }, [location.pathname]);

    return (
        <Wrapper hideNav={hideNav} isOnTop={isOnTop} toggle={toggle}>
            <StyledLogo to="/" isOnTop={isOnTop} changeColor={changeColor}>
                <header>
                    <h1 translate="no">Leyla Bellydance</h1>
                </header>
            </StyledLogo>

            <NavigationItems
                isOnTop={isOnTop}
                changeColor={changeColor}
                toggle={toggle}
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
