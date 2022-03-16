import React from 'react';
import HeroImage from 'templates/Kontakt/HeroImage/HeroImage';
import MainWrapper from 'components/MainWrapper/MainWrapper';
import Content from 'templates/Kontakt/Content/Content';

const kontakt = () => {
    return (
        <MainWrapper>
            <HeroImage />

            <Content />
        </MainWrapper>
    );
};

export default kontakt;
