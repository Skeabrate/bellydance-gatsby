import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Heading from 'components/heading/heading';
import Frame from 'components/Frame/Frame';
import { secondSection } from '../indexData';

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
                            <h2>{secondSection[0].title}</h2>
                        </header>
                        <p>{secondSection[0].desc}</p>
                    </article>

                    <Frame upMobile>
                        <StyledSandArticle>
                            <header>
                                <h2>{secondSection[1].title}</h2>
                            </header>
                            <p>{secondSection[1].desc}</p>
                        </StyledSandArticle>
                    </Frame>
                </div>

                <StyledImgs>
                    <StaticImage
                        src="../../../assets/images/Homepage/homepage3.jpg"
                        alt="Agnieszka Świeczkowska - dyplom"
                        placeholder="blurred"
                    />

                    <Frame>
                        <StaticImage
                            src="../../../assets/images/Homepage/homepage4.jpg"
                            alt="Agnieszka Świeczkowska - dyplom"
                            placeholder="blurred"
                        />
                    </Frame>
                </StyledImgs>
            </StyledSecondSection>
        </section>
    );
};

export default SecondSection;
