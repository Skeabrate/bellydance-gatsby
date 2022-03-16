import React from 'react';
import Heading from 'components/Heading/Heading';
import { thirdSectionData } from '../indexData';

import { StyledThridArticle } from './ThirdSection.styles';

const ThirdSection = () => {
    return (
        <section>
            <Heading label={'Wspieram'} />

            <StyledThridArticle>
                <header>
                    <h2>{thirdSectionData[0].title}</h2>
                    <p>{thirdSectionData[0].desc}</p>
                </header>
            </StyledThridArticle>
        </section>
    );
};

export default ThirdSection;
