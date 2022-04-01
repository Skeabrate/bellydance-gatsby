import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIndex } from 'hooks/useIndex';

import ContentWrapper from 'templates/ContentWrapper';
import PyramidScroll from 'components/PyramidScroll/PyramidScroll';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import SandSection from 'components/SandSection/SandSection';

import {
    firstSectionData,
    secondSectionData,
    thirdSectionData,
} from 'data/indexData';

import {
    StyledBgImage,
    StyledDarken,
    StyledBgTitle,
    StyledFirstSection,
    StyledFirstSectionImg,
    StyledSecondSectionImg,
    StyledThridArticle,
} from 'assets/styles/pages/index.styles';

const Index = () => {
    const { pluginImage } = useIndex();

    return (
        <main>
            {/* HeroImage */}
            <StyledBgImage image={pluginImage}>
                <StyledDarken />
                <StyledBgTitle>
                    <h1>Magiczny Świat Orientu</h1>
                    <p>Zapraszam do baśni 1000 i jednej nocy</p>
                    <StaticImage
                        src="../assets/images/ornHero.png"
                        alt="title ornament"
                        placeholder="blurred"
                        width={200}
                    />
                </StyledBgTitle>

                <PyramidScroll />
            </StyledBgImage>

            {/* Content */}
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
                                src="../assets/images/Homepage/homepage1.jpg"
                                alt="Agnieszka Świeczkowska - legitymacja instruktora"
                                placeholder="blurred"
                                layout="fullWidth"
                            />
                        </Frame>

                        <Frame upRight>
                            <StaticImage
                                src="../assets/images/Homepage/homepage2.jpg"
                                alt="Agnieszka Świeczkowska - legitymacja instruktora"
                                placeholder="blurred"
                                layout="fullWidth"
                            />
                        </Frame>
                    </StyledFirstSectionImg>
                </section>

                <section>
                    <Heading label={'Moje Osiągnięcia'} />

                    <SandSection data={secondSectionData}>
                        <StyledSecondSectionImg>
                            <StaticImage
                                src="../assets/images/Homepage/homepage3.jpg"
                                alt="Agnieszka Świeczkowska - dyplom"
                                placeholder="blurred"
                                layout="fullWidth"
                            />

                            <Frame upRight hideMobile>
                                <StaticImage
                                    src="../assets/images/Homepage/homepage4.jpg"
                                    alt="Agnieszka Świeczkowska - dyplom"
                                    placeholder="blurred"
                                    layout="fullWidth"
                                />
                            </Frame>
                        </StyledSecondSectionImg>
                    </SandSection>
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
        </main>
    );
};

export default Index;
