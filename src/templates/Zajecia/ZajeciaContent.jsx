import React from 'react';
import Heading from 'components/Heading/Heading';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import GridContent from 'components/GridContent/GridContent';
import { firstSectionData, secondSectionData } from './zajeciaData';
import { StaticImage } from 'gatsby-plugin-image';
import Frame from 'components/Frame/Frame';
import PyramidPointer from 'components/PyramidPointer/PyramidPointer';
import SkipButton from 'components/SkipButton/SkipButton';
import SandArticle from 'components/SandArticle/SandArticle';
import GridSection from 'components/GridSection/GridSection';

const ZajeciaContent = () => {
    return (
        <ContentWrapper>
            <Heading label="Taniec orientalny jest dla każdej z nas" isMain />

            <GridContent>
                <GridSection isBig>
                    <article>
                        <header>
                            <h2>
                                Bez względu na wiek, predyspozycje fizyczne, czy
                                wcześniejszą aktywność ruchową,{' '}
                                <span style={{ fontWeight: '400' }}>
                                    każda z Pań może rozpocząć naukę tańca belly
                                    dance.
                                </span>
                            </h2>
                        </header>

                        <ul>
                            {firstSectionData.map(({ id, val }) => (
                                <li key={id}>
                                    <PyramidPointer />
                                    {val}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <Frame downRight>
                        <StaticImage
                            src="../../assets/images/Zajecia/zajecia1.jpg"
                            alt="Agnieszka Świeczkowska belly dance, taniec brzucha - zajęcia"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </GridSection>

                <GridSection isBig>
                    <article>
                        <header>
                            <h2>Dzięki zajęciom tańca brzucha możemy:</h2>
                        </header>

                        <ul>
                            {secondSectionData.map(({ id, val }) => (
                                <li key={id}>
                                    <PyramidPointer />
                                    {val}
                                </li>
                            ))}
                        </ul>

                        <SkipButton
                            label="Czego uczy nas bellydance?"
                            scrollId="#nauka"
                        />
                    </article>

                    <Frame>
                        <StaticImage
                            src="../../assets/images/Zajecia/zajecia2.jpg"
                            alt="Agnieszka Świeczkowska belly dance, taniec brzucha - zajęcia"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </GridSection>

                <GridSection isBig isSand>
                    <div id="nauka">
                        <article>
                            <header>
                                <h2>
                                    Dzieki wymaganej systematyczności w
                                    treningach taniec orientalny uczy nas
                                    cierpliwości, wytrwałości i szacunku dla
                                    swojego ciała.
                                </h2>
                            </header>

                            <p>
                                Jednocześnie jest lekcją pokory wobec nieznanej
                                nam wiedzy, wymagającą naszego zaangażowania i
                                pracy, jeśli chcemy rozwijać się w tym
                                wyjątkowym tańcu. Poprzez pracę z emocjami i
                                wysiłek fizyczny pozwala uwolnić się od napięć i
                                skupić się na samej sobie - tym, co czuje nasze
                                ciało - na własnych odczuciach, emocjach.
                            </p>
                        </article>

                        <SandArticle>
                            <header>
                                <h2>
                                    Taniec w gronie innych kobiet doskonale
                                    wpływa na nasz nastrój i samopoczucie
                                </h2>
                            </header>
                            <p>
                                pozwala rozwijać swą pasję , mieć satysfakcje z
                                osobistych postępów, a nawet dzielić się nią
                                podczas wspólnych występów na scenie, czy
                                tanecznym parkiecie.
                            </p>
                        </SandArticle>
                    </div>

                    <Frame upRight hideMobile>
                        <StaticImage
                            src="../../assets/images/Zajecia/zajecia3.jpg"
                            alt="Agnieszka Świeczkowska belly dance, taniec brzucha - zajęcia"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </GridSection>
            </GridContent>
        </ContentWrapper>
    );
};

export default ZajeciaContent;
