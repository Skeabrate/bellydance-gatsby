import React from 'react';
import HeroImage from 'templates/kontakt/HeroImage/HeroImage';
import MainWrapper from 'components/MainWrapper/MainWrapper';
import Content from 'templates/kontakt/Content/Content';

const kontakt = () => {
    return (
        <MainWrapper>
            <HeroImage />

            <Content />
        </MainWrapper>
    );
};

export default kontakt;
