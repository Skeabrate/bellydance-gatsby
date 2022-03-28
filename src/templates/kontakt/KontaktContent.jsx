import React from 'react';
import Heading from 'components/Heading/Heading';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import Phone from 'assets/images/svg/telefon.svg';
import { StaticImage } from 'gatsby-plugin-image';
import Frame from 'components/Frame/Frame';

import { StyledSection, StyledForm } from './KontaktContent.styles';

const KontaktContent = () => {
    return (
        <ContentWrapper>
            <Heading label="Kontakt" isMain />

            <StyledSection>
                <article>
                    <header>
                        <h2>
                            Nieustannie rozwijam swoją technikę taneczną,
                            uczestnicząc w warsztatach prowadzonych przez
                            wybitnych nauczycieli.
                        </h2>

                        <p>
                            <Phone /> Telefon:{' '}
                            <a
                                href="tel:'502 505 119"
                                rel="noopener noreferrer"
                            >
                                502 505 119
                            </a>{' '}
                        </p>
                    </header>

                    <StyledForm>
                        <input
                            aria-label="imię"
                            type="text"
                            placeholder="Imię"
                        />
                        <input
                            aria-label="adres e-mail"
                            type="email"
                            placeholder="Adres e-mail"
                        />
                        <textarea
                            aria-label="wiadomość"
                            name="message"
                            id="message"
                            placeholder="Wiadomość"
                        ></textarea>
                        <input type="submit" value="Wyślij" />
                    </StyledForm>
                </article>

                <Frame>
                    <StaticImage
                        src="../../assets/images/Kontakt/kontakt.jpg"
                        alt="Agnieszka Świeczkowska - kontakt"
                        placeholder="blurred"
                        layout="fullWidth"
                    />
                </Frame>
            </StyledSection>
        </ContentWrapper>
    );
};

export default KontaktContent;
