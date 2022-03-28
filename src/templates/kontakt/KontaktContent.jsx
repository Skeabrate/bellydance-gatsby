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
                        <h2>Lorem ipsum dolor sit!</h2>
                        <p>
                            Nieustannie rozwijam swoją technikę taneczną,
                            uczestnicząc w warsztatach prowadzonych przez
                            wybitnych nauczycieli tańca orientalnego.
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
                        <input type="text" placeholder="Imię" />
                        <input type="email" placeholder="Adres e-mail" />
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Wiadomość"
                        ></textarea>
                    </StyledForm>
                </article>

                <Frame>
                    <StaticImage
                        src="../../assets/images/Pokazy/img7.jpg"
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
