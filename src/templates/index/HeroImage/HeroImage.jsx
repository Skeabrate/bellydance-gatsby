import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import ArrowHome from 'assets/images/SVG/arrowHome.svg';
import { StaticImage } from 'gatsby-plugin-image';

import {
    StyledBgImage,
    StyledDarken,
    StyledBgTitle,
    StyledPyramid,
} from './HeroImage.styles';

const HeroImage = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "Homepage/homepageBaner.jpg" }
                ) {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
                    }
                }
            }
        `
    );

    const pluginImage = getImage(placeholderImage);

    return (
        <StyledBgImage image={pluginImage}>
            <StyledDarken />
            <StyledBgTitle>
                <h1>Magiczny Świat Orientu</h1>
                <p>Zapraszam do baśni 1000 i jednej nocy</p>
                <StaticImage
                    src="../../../assets/images/ornHero.png"
                    alt="title ornament"
                    placeholder="blurred"
                    width={200}
                />
            </StyledBgTitle>

            <StyledPyramid>
                <ArrowHome />
            </StyledPyramid>
        </StyledBgImage>
    );
};

export default HeroImage;
