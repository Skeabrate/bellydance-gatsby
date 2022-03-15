import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import ArrowHome from 'assets/images/SVG/arrowHome.svg';
import { StaticImage } from 'gatsby-plugin-image';
import Heading from 'components/heading/heading';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';

import { StyledBgImage, StyledPyramid } from './index.styles';

const IndexPage = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "Homepage/homepageBaner.jpg" }
                ) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: WEBP
                        )
                    }
                }
            }
        `
    );
    const pluginImage = getImage(placeholderImage);

    return (
        <main>
            <StyledBgImage image={pluginImage}>
                <div>
                    <h1>Magiczny Świat Orientu</h1>
                    <p>Zapraszam do baśni 1000 i jednej nocy</p>
                    <StaticImage
                        src="../assets/images/ornHero.png"
                        alt="title ornament"
                        placeholder="blurred"
                        width={200}
                    />
                </div>

                <StyledPyramid>
                    <ArrowHome />
                </StyledPyramid>
            </StyledBgImage>

            <ContentWrapper>
                <section>
                    <Heading label={'O mnie'} />
                </section>

                <section></section>

                <section></section>
            </ContentWrapper>
        </main>
    );
};

export default IndexPage;
