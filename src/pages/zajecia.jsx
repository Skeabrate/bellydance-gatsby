import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import GridSection from 'templates/GridSection';
import GridContent from 'templates/GridContent';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import PyramidPointer from 'components/PyramidPointer/PyramidPointer';
import SkipButton from 'components/SkipButton/SkipButton';
import SandSection from 'components/SandSection/SandSection';

import {
    firstSectionData,
    secondSectionData,
    thirdSectionData,
} from '../data/zajeciaData';

const Zajecia = () => {
    return (
        <MainWrapper>
            <ContentWrapper>
                <Heading
                    label="Taniec orientalny jest dla każdej z nas"
                    isMain
                />

                <GridContent>
                    <GridSection isBig>
                        <article>
                            <header>
                                <h2>
                                    Bez względu na wiek, predyspozycje fizyczne,
                                    czy wcześniejszą aktywność ruchową,{' '}
                                    <span style={{ fontWeight: '400' }}>
                                        każda z Pań może rozpocząć naukę tańca
                                        belly dance.
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
                                src="../assets/images/Zajecia/zajecia1.jpg"
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
                                src="../assets/images/Zajecia/zajecia2.jpg"
                                alt="Agnieszka Świeczkowska belly dance, taniec brzucha - zajęcia"
                                placeholder="blurred"
                                layout="fullWidth"
                            />
                        </Frame>
                    </GridSection>

                    <section id="nauka">
                        <SandSection data={thirdSectionData}>
                            <Frame upRight hideMobile>
                                <StaticImage
                                    src="../assets/images/Zajecia/zajecia3.jpg"
                                    alt="Agnieszka Świeczkowska belly dance, taniec brzucha - zajęcia"
                                    placeholder="blurred"
                                    layout="fullWidth"
                                />
                            </Frame>
                        </SandSection>
                    </section>
                </GridContent>
            </ContentWrapper>
        </MainWrapper>
    );
};

export default Zajecia;
