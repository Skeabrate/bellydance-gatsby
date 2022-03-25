import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import {
    firstSectionData,
    secondSectionData,
    thirdSectionData,
} from './indexData';

import {
    StyledFirstSection,
    StyledFirstSectionImg,
    StyledSecondSection,
    StyledSecondSectionImg,
    StyledSandArticle,
    StyledThridArticle,
} from './Content.styles';

const Content = () => {
    return (
        <ContentWrapper>
            <section>
                <Heading label="O mnie" isMain />

                <StyledFirstSection>
                    {firstSectionData.map(({ id, title, desc }) => (
                        <article key={id}>
                            <header>
                                <h2>{title}</h2>
                            </header>
                            <p>{desc}</p>
                        </article>
                    ))}
                </StyledFirstSection>

                <StyledFirstSectionImg>
                    <Frame hideMobile>
                        <StaticImage
                            src="../../../assets/images/Homepage/homepage1.jpg"
                            alt="Agnieszka Świeczkowska - legitymacja instruktora"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>

                    <Frame upRight>
                        <StaticImage
                            src="../../../assets/images/Homepage/homepage2.jpg"
                            alt="Agnieszka Świeczkowska - legitymacja instruktora"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </StyledFirstSectionImg>
            </section>

            <section>
                <Heading label={'Moje Osiągnięcia'} />

                <StyledSecondSection>
                    <div>
                        <article>
                            <header>
                                <h2>{secondSectionData[0].title}</h2>
                            </header>
                            <p>{secondSectionData[0].desc}</p>
                        </article>

                        <Frame>
                            <StyledSandArticle>
                                <header>
                                    <h2>{secondSectionData[1].title}</h2>
                                </header>
                                <p>{secondSectionData[1].desc}</p>
                            </StyledSandArticle>
                        </Frame>
                    </div>

                    <StyledSecondSectionImg>
                        <StaticImage
                            src="../../../assets/images/Homepage/homepage3.jpg"
                            alt="Agnieszka Świeczkowska - dyplom"
                            placeholder="blurred"
                            layout="fullWidth"
                        />

                        <Frame upRight hideMobile>
                            <StaticImage
                                src="../../../assets/images/Homepage/homepage4.jpg"
                                alt="Agnieszka Świeczkowska - dyplom"
                                placeholder="blurred"
                                layout="fullWidth"
                            />
                        </Frame>
                    </StyledSecondSectionImg>
                </StyledSecondSection>
            </section>

            <section>
                <Heading label={'Wspieram'} />

                <StyledThridArticle>
                    <header>
                        <h2>{thirdSectionData[0].title}</h2>
                    </header>

                    <p>{thirdSectionData[0].desc}</p>
                </StyledThridArticle>
            </section>
        </ContentWrapper>
    );
};

export default Content;
