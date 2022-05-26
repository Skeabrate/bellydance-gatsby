import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from '@reach/router';
import { useScroll } from 'hooks/useScroll';
import NavigationItems from './NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';
import { Wrapper, StyledLogo } from './Navigation.styles';
import LightBoxContext from 'context/LightBoxContext';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const { imgIndex } = useContext(LightBoxContext);
  const { isOnTop, hideNav } = useScroll();
  const location = useLocation();

  const handleCloseMenu = () => setToggle(!toggle);

  useEffect(() => {
    if (location.pathname === '/') setChangeColor(true);
    else setChangeColor(false);

    setToggle(false);
  }, [location.pathname]);

  return (
    <Wrapper
      $imgIndex={imgIndex}
      $hideNav={hideNav}
      $isOnTop={isOnTop}
      $toggle={toggle}
      $changeColor={changeColor}
    >
      <StyledLogo to='/' $isOnTop={isOnTop} $changeColor={changeColor}>
        <header>
          <h1 translate='no'>Leyla Bellydance</h1>
        </header>
      </StyledLogo>

      <NavigationItems
        isOnTop={isOnTop}
        changeColor={changeColor}
        toggle={toggle}
        handleCloseMenu={handleCloseMenu}
      />

      <Hamburger handleCloseMenu={handleCloseMenu} isOnTop={isOnTop} changeColor={changeColor} />
    </Wrapper>
  );
};

export default Navigation;
