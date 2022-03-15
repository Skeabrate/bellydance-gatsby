import * as React from 'react';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import HeroImage from 'templates/index/HeroImage/HeroImage';
import FirstSection from 'templates/index/FirstSection/FirstSection';
import SecondSection from 'templates/index/SecondSection/SecondSection';
import ThirdSection from 'templates/index/ThirdSection/ThirdSection';

const IndexPage = () => {
    return (
        <main>
            <HeroImage />

            <ContentWrapper>
                <FirstSection />

                <SecondSection />

                <ThirdSection />
            </ContentWrapper>
        </main>
    );
};

export default IndexPage;
