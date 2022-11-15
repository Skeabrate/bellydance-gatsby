import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './NavigationItems.styles';
import X from 'assets/images/SVG/x.svg';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';

const items = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
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

const NavigationItems = ({ toggle, isOnTop, changeColor, toggleNav = () => {} }) => {
  return (
    <Styled.Wrapper $toggle={toggle}>
      <Styled.Logo to='/'>
        <h1 translate='no'>Leyla Bellydance</h1>
      </Styled.Logo>

      <Styled.NavLinksList>
        {items.map(({ title, path }) => (
          <li key={title}>
            <Styled.NavLink
              to={path}
              activeStyle={activeLinkStyles}
              $isOnTop={isOnTop}
              $changeColor={changeColor}
            >
              {title}
            </Styled.NavLink>
          </li>
        ))}

        <Styled.CloseButton>
          <button
            onClick={toggleNav}
            aria-label='zamknij nawigację'
          >
            <X />
          </button>
        </Styled.CloseButton>
      </Styled.NavLinksList>

      <Styled.Socials>
        <Styled.SocialsItem
          title='facebook'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/agnieszka.swieczkowska.9'
          $isOnTop={isOnTop}
          $changeColor={changeColor}
        >
          <Facebook />
        </Styled.SocialsItem>

        <Styled.SocialsItem
          title='instagram'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/bellydance_leyla/'
          $isOnTop={isOnTop}
          $changeColor={changeColor}
        >
          <Instagram />
        </Styled.SocialsItem>
      </Styled.Socials>
    </Styled.Wrapper>
  );
};

NavigationItems.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  isOnTop: PropTypes.bool.isRequired,
  changeColor: PropTypes.bool.isRequired,
};

export default NavigationItems;
