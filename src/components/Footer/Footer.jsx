import React from 'react';
import Facebook from 'assets/images/SVG/fb.svg';
import Instagram from 'assets/images/SVG/insta.svg';
import Youtube from 'assets/images/SVG/yt.svg';

import { Wrapper, StyledLogo, StyledSocials } from './Footer.styles';

const Footer = () => {
    return (
        <Wrapper>
            <StyledLogo to="/">
                <header>
                    <h1 translate="no">Leyla Bellydance</h1>
                </header>
            </StyledLogo>

            <StyledSocials>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/bellydance_leyla/"
                    >
                        <Youtube />
                    </a>
                </li>
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

            <p>
                &copy; {new Date().getFullYear()} Agnieszka Świeczkowska All
                rights reserved
            </p>
        </Wrapper>
    );
};

export default Footer;
