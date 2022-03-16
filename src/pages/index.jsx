import * as React from 'react';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import HeroImage from 'templates/Index/HeroImage/HeroImage';
import FirstSection from 'templates/Index/FirstSection/FirstSection';
import SecondSection from 'templates/Index/SecondSection/SecondSection';
import ThirdSection from 'templates/Index/ThirdSection/ThirdSection';

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
