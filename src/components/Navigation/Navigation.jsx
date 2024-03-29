import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as Styled from './Navigation.styles';
import { useLocation } from '@reach/router';
import { useScroll } from 'hooks/useScroll';
import { StaticImage } from 'gatsby-plugin-image';
import NavigationItems from './NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [changeColor, setChangeColor] = useState(true);

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
      $hideNav={hideNav}
      $isOnTop={isOnTop}
      $toggle={toggle}
      $changeColor={changeColor}
    >
      <Link to='/'>
        <StaticImage
          src='../../assets/images/leyla-bellydance-logo.png'
          alt='leyla bellydance logo'
          placeholder='blurred'
          width={180}
        />
      </Link>

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
