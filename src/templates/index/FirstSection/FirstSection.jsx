import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Heading from 'components/Heading/Heading';
import Frame from 'components/Frame/Frame';
import { firstSectionData } from '../indexData';

import {
    StyledFirstSection,
    StyledFirstSectionImg,
} from './FirstSection.styles';

const FirstSection = () => {
    return (
        <section>
            <Heading label={'O mnie'} />

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
                <Frame upMobile>
                    <StaticImage
                        src="../../../assets/images/Homepage/homepage1.jpg"
                        alt="Agnieszka Świeczkowska - legitymacja instruktora"
                        placeholder="blurred"
                    />
                </Frame>

                <Frame>
                    <StaticImage
                        src="../../../assets/images/Homepage/homepage2.jpg"
                        alt="Agnieszka Świeczkowska - legitymacja instruktora"
                        placeholder="blurred"
                    />
                </Frame>
            </StyledFirstSectionImg>
        </section>
    );
};

export default FirstSection;
