import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import { secondSectionData } from '../indexData';

import {
    StyledSecondSection,
    StyledSandArticle,
    StyledImgs,
} from './SecondSection.styles';

const SecondSection = () => {
    return (
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

                <StyledImgs>
                    <StaticImage
                        src="../../../assets/images/Homepage/homepage3.jpg"
                        alt="Agnieszka Świeczkowska - dyplom"
                        placeholder="blurred"
                        layout="fullWidth"
                    />

                    <Frame upRight>
                        <StaticImage
                            src="../../../assets/images/Homepage/homepage4.jpg"
                            alt="Agnieszka Świeczkowska - dyplom"
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </Frame>
                </StyledImgs>
            </StyledSecondSection>
        </section>
    );
};

export default SecondSection;
