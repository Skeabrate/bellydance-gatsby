import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StructuredText } from 'react-datocms';
import { getFirstPublishedAtDate } from 'utils/getFirstPublishedAtDate';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Heading from 'components/Heading/Heading';

export default function BlogPost({
  data: {
    datoCmsBlog: { blogPostTitle, content, seo, date, meta },
  },
}) {
  return (
    <>
      <HeadComponent
        title={seo.title || blogPostTitle}
        description={seo.description}
      />

      <MainWrapper>
        <ContentWrapper>
          <Heading
            label={blogPostTitle}
            isMain
          />

          <p>{date || getFirstPublishedAtDate(meta.firstPublishedAt)}</p>

          <section>
            {content.map(({ id, title, description, image }) => (
              <article key={id}>
                <header>
                  <h2>{title}</h2>
                </header>

                <StructuredText data={description?.value} />

                {image.gatsbyImageData ? (
                  <GatsbyImage
                    image={image.gatsbyImageData}
                    alt={image.alt || 'Agnieszka Świeczkowska Leyla bellydance'}
                  />
                ) : (
                  <video
                    preload='metadata'
                    controls
                    width='100%'
                    height='100%'
                  >
                    <source
                      src={`${image.url}#t=0.1`}
                      type='video/mp4'
                    />
                  </video>
                )}
              </article>
            ))}
          </section>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
}

export const query = graphql`
  query ($link: String!) {
    datoCmsBlog(link: { eq: $link }) {
      blogPostTitle
      content {
        id
        title
        description {
          value
        }
        image {
          gatsbyImageData(placeholder: BLURRED)
          url
          alt
        }
      }
      seo {
        title
        description
      }
      date
      meta {
        firstPublishedAt
      }
    }
  }
`;
