import React from 'react';
import Heading from 'components/Heading/Heading';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import { StaticImage } from 'gatsby-plugin-image';
import SkipButton from 'components/SkipButton/SkipButton';
import Frame from 'components/Frame/Frame';

import { StyledContent } from './Content.styles';

const Content = () => {
    return (
        <ContentWrapper>
            <Heading label="Moje Pokazy" isMain />

            <StyledContent>
                <section>
                    <article>
                        <header>
                            <h2>
                                Magia tańca orientalnego podczas Państwa
                                uroczystości
                            </h2>
                        </header>

                        <p>
                            W ten egzotyczny świat wprowadzi Cię tancerka Leyla,
                            która może zatańczyć na Państwa weselu, imprezie
                            okolicznościowej, czy ofiarować w imieniu Państwa,
                            taniec dla gości imprezy.
                        </p>

                        <footer>
                            <SkipButton label="Program pokazów" />
                        </footer>
                    </article>

                    <Frame>
                        <StaticImage
                            src="../../../assets/images/Pokazy/img11.jpg"
                            alt="Agnieszka Świeczkowska belly dance, taniec brzucha - pokazy"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </section>

                <section>
                    <article>
                        <p>
                            Program i charakter pokazu może być dostosowany do
                            rodzaju imprezy okolicznościowej oraz oczekiwań
                            Klienta, gdyż w moim repertuarze znajdują się:
                        </p>

                        <ul>
                            <li>
                                <strong>nowoczesny pop</strong>
                            </li>
                            <li>
                                <strong>
                                    pokazy z gatunku fantasy belly dance,
                                </strong>{' '}
                                czyli taneczne show z rekwizytami: skrzydłami
                                Izydy, woalem, wachlarzami
                            </li>
                            <li>
                                <strong>zmysłowa klasyka</strong>
                            </li>
                            <li>
                                <strong>
                                    radosny folklor do wesołej muzyki
                                </strong>
                            </li>
                        </ul>
                    </article>

                    <Frame downRight>
                        <StaticImage
                            src="../../../assets/images/Pokazy/img9.jpg"
                            alt="Agnieszka Świeczkowska belly dance, taniec brzucha - pokazy"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </section>

                <section>
                    <article>
                        <header>
                            <h2>Na zakończenie, wspólna zabawa</h2>
                        </header>

                        <p>
                            Na zakończenie pokazu proponujemy wspólną zabawę z
                            Gośćmi przy dźwiękach znanych piosenek Shakiry,
                            Tarkana, czy Arasha. Nauka podstawowych ruchów belly
                            dance rozweseli nawet najmniej roztańczonych Gości!
                        </p>

                        <footer>
                            <SkipButton label="Galeria zdjęć" />
                        </footer>
                    </article>

                    <Frame>
                        <StaticImage
                            src="../../../assets/images/Pokazy/img10.jpg"
                            alt="Agnieszka Świeczkowska belly dance, taniec brzucha - pokazy"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </section>
            </StyledContent>
        </ContentWrapper>
    );
};

export default Content;
