import React from 'react';
import * as Styled from './Footer.styles';
import { StaticImage } from 'gatsby-plugin-image';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';
import Youtube from 'assets/images/SVG/yt.svg';

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.StyledLogo to='/'>
				<StaticImage 
					src='../../assets/images/leyla-bellydance-logo-black.png'
					alt='leyla bellydance logo'
					placeholder='blurred'
					width={180}
				/>
      </Styled.StyledLogo>

      <Styled.Socials>
        <li>
          <a
            title='youtube'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.youtube.com/channel/UCcej2QdrmTszAKN5IwrtEKw'
          >
            <Youtube />
          </a>
        </li>
        <li>
          <a
            title='facebook'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/agnieszka.swieczkowska.9'
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            title='instagram'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/bellydance_leyla/'
          >
            <Instagram />
          </a>
        </li>
      </Styled.Socials>

      <p>&copy; {new Date().getFullYear()} Agnieszka Świeczkowska All rights reserved</p>
    </Styled.Wrapper>
  );
};

export default Footer;
