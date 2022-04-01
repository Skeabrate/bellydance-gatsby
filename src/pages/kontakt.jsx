import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useKontakt } from 'hooks/useKontakt';

import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';
import Heading from 'components/Heading/Heading';
import Phone from 'assets/images/svg/telefon.svg';
import Frame from 'components/Frame/Frame';

import { StyledSection, StyledForm } from 'assets/styles/pages/kontakt.styles';

const Kontakt = () => {
    const { placeholderImage, submitHandler } = useKontakt();

    return (
        <MainWrapper>
            <HeroImageContainer placeholderImage={placeholderImage} />

            <ContentWrapper>
                <Heading label="Kontakt" isMain />

                <StyledSection>
                    <article>
                        <header>
                            <h2>Zapraszam do kontaktu</h2>

                            <p>
                                Nieustannie rozwijam swoją technikę taneczną,
                                uczestnicząc w warsztatach prowadzonych przez
                                wybitnych nauczycieli.
                            </p>

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
                            <input
                                type="submit"
                                value="Wyślij"
                                onClick={(e) => submitHandler(e)}
                            />
                        </StyledForm>
                    </article>

                    <Frame downRight>
                        <StaticImage
                            src="../assets/images/Kontakt/kontakt.jpg"
                            alt="Agnieszka Świeczkowska - kontakt"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </StyledSection>
            </ContentWrapper>
        </MainWrapper>
    );
};

export default Kontakt;
