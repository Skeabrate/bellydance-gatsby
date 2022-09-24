import React, { useState, useEffect, useContext } from 'react';
import * as Styled from './Navigation.styles';
import { useLocation } from '@reach/router';
import { useScroll } from 'hooks/useScroll';
import NavigationItems from './NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';
import LightBoxContext from 'context/LightBoxContext';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [changeColor, setChangeColor] = useState(true);

  const { imgIndex } = useContext(LightBoxContext);
  const { isOnTop, hideNav } = useScroll();
  const location = useLocation();

  const toggleNav = () => setToggle(!toggle);

  useEffect(() => {
    if (location.pathname === '/') setChangeColor(true);
    else setChangeColor(false);

    setToggle(false);
  }, [location.pathname]);

  return (
    <Styled.Wrapper
      $imgIndex={imgIndex}
      $hideNav={hideNav}
      $isOnTop={isOnTop}
      $toggle={toggle}
      $changeColor={changeColor}
    >
      <Styled.Logo
        to='/'
        $isOnTop={isOnTop}
        $changeColor={changeColor}
      >
        <header>
          <h1 translate='no'>Leyla Bellydance</h1>
        </header>
      </Styled.Logo>

      <NavigationItems
        isOnTop={isOnTop}
        changeColor={changeColor}
        toggle={toggle}
        toggleNav={toggleNav}
      />

      <Hamburger
        toggleNav={toggleNav}
        isOnTop={isOnTop}
        changeColor={changeColor}
      />
    </Styled.Wrapper>
  );
};

export default Navigation;
