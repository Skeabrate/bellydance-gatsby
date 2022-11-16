import React from 'react';
import * as Styled from 'assets/styles/pages/blog-post.styles';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StructuredText } from 'react-datocms';
import { getFirstPublishedAtDate } from 'utils/getFirstPublishedAtDate';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Heading from 'components/Heading/Heading';
import Video from 'components/Video/Video';

export default function BlogPost({
  data: {
    datoCmsBlog: { blogPostTitle, content, seo, date, meta },
  },
}) {
  return (
    <>
      <HeadComponent
        title={seo?.title || blogPostTitle}
        description={seo?.description}
      />

      <MainWrapper>
        <ContentWrapper>
          <Styled.Wrapper>
            <Heading
              label={blogPostTitle}
              isMain
            />

            <Styled.Date>{date || getFirstPublishedAtDate(meta.firstPublishedAt)}</Styled.Date>

            <section>
              {content.map(({ id, title, description, image }) => (
                <Styled.Chapter key={id}>
                  {title && (
                    <header>
                      <h2>{title}</h2>
                    </header>
                  )}

                  <StructuredText data={description.value} />

                  {image?.gatsbyImageData ? (
                    <GatsbyImage
                      image={image.gatsbyImageData}
                      alt={image.alt || 'Agnieszka Świeczkowska Leyla bellydance'}
                    />
                  ) : image?.url ? (
                    <Video source={image.url} />
                  ) : null}
                </Styled.Chapter>
              ))}
            </section>
          </Styled.Wrapper>
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
