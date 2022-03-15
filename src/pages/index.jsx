import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import ArrowHome from 'assets/images/SVG/arrowHome.svg';
import { StaticImage } from 'gatsby-plugin-image';
import Heading from 'components/heading/heading';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import { firstSection, secondSection, thirdSection } from 'data/indexData';

import {
    StyledBgImage,
    StyledPyramid,
    StyledFirstSection,
    StyledDarken,
    StyledBgTitle,
    StyledFirstSectionImg,
} from './index.styles';

const IndexPage = () => {
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
        <main>
            <StyledBgImage image={pluginImage}>
                <StyledDarken />
                <StyledBgTitle>
                    <h1>Magiczny Świat Orientu</h1>
                    <p>Zapraszam do baśni 1000 i jednej nocy</p>
                    <StaticImage
                        src="../assets/images/ornHero.png"
                        alt="title ornament"
                        placeholder="blurred"
                        width={200}
                    />
                </StyledBgTitle>

                <StyledPyramid>
                    <ArrowHome />
                </StyledPyramid>
            </StyledBgImage>

            <ContentWrapper>
                <section>
                    <Heading label={'O mnie'} />

                    <StyledFirstSection>
                        {firstSection.map(({ id, title, desc }) => (
                            <article key={id}>
                                <header>
                                    <h2>{title}</h2>
                                </header>
                                <p>{desc}</p>
                            </article>
                        ))}
                    </StyledFirstSection>

                    <StyledFirstSectionImg>
                        <StaticImage
                            src="../assets/images/Homepage/homepage1.jpg"
                            alt="Agnieszka Świeczkowska - legitymacja instruktora"
                            placeholder="blurred"
                        />
                        <StaticImage
                            src="../assets/images/Homepage/homepage2.jpg"
                            alt="Agnieszka Świeczkowska - legitymacja instruktora"
                            placeholder="blurred"
                        />
                    </StyledFirstSectionImg>
                </section>

                {/* <section>
                    <Heading label={'Moje Osiągnięcia'} />

					
					<article>
						<header>{}</header>
						<p>{}</p>
					</article>
                </section>

                <section>
                    <Heading label={'Wspieram'} />
                </section> */}
            </ContentWrapper>
        </main>
    );
};

export default IndexPage;
