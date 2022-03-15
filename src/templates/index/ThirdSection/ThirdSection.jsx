import React from 'react';
import Heading from 'components/heading/heading';
import { thirdSection } from '../indexData';

import { StyledThridArticle } from './ThirdSection.styles';

const ThirdSection = () => {
    return (
        <section>
            <Heading label={'Wspieram'} />

            <StyledThridArticle>
                <header>
                    <h2>{thirdSection[0].title}</h2>
                    <p>{thirdSection[0].desc}</p>
                </header>
            </StyledThridArticle>
        </section>
    );
};

export default ThirdSection;
