import React from 'react';
import HeroImage from 'templates/Kontakt/HeroImage/HeroImage';
import MainWrapper from 'components/MainWrapper/MainWrapper';
import KontaktContent from 'templates/Kontakt/KontaktContent';

const kontakt = () => {
    return (
        <MainWrapper>
            <HeroImage />

            <KontaktContent />
        </MainWrapper>
    );
};

export default kontakt;
