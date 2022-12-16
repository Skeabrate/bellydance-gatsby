import React from 'react';
import * as Styled from 'assets/styles/pages/blog-post.styles';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StructuredText } from 'react-datocms';
import { getFirstPublishedAtDate } from 'utils/getFirstPublishedAtDate';
import Calendar from 'assets/images/SVG/calendar.svg';
import LeftArrow from 'assets/images/SVG/thinArrow.svg';
import UpArrow from 'assets/images/SVG/upArrow.svg';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Heading from 'components/Heading/Heading';
import Video from 'components/Video/Video';
import Frame from 'components/Frame/Frame';

export default function BlogPost({
  data: {
    datoCmsBlog: { blogPostTitle, content, seo, date, meta },
  },
}) {
  const goBackToTopHandler = () =>
    typeof window !== 'undefined' &&
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

  return (
    <>
      <HeadComponent
        title={seo?.title || blogPostTitle}
        description={seo?.description}
      />

      <MainWrapper>
        <ContentWrapper>
          <Styled.Wrapper>
            <Styled.GoBack to='/blog'>
              <LeftArrow />
              Wróć do listy
            </Styled.GoBack>

            <Heading
              label={blogPostTitle}
              isMain
            />

            <Styled.Date>
              <Calendar /> {date || getFirstPublishedAtDate(meta.firstPublishedAt)}
            </Styled.Date>

            <section>
              {content.map(({ id, title, description, image }, index) => (
                <Styled.Chapter key={id}>
                  <div>
                    {title && (
                      <header>
                        <h2>{title}</h2>
                      </header>
                    )}

                    <StructuredText data={description.value} />
                  </div>

                  {(image?.gatsbyImageData || image?.video) && (
                    <Frame
                      isFlex
                      downRight={index % 2 === 0}
                    >
                      <Styled.Media>
                        {image?.gatsbyImageData ? (
                          <GatsbyImage
                            image={image.gatsbyImageData}
                            alt={image.alt || 'Agnieszka Świeczkowska Leyla bellydance'}
                          />
                        ) : image?.video ? (
                          <Video
                            source={image.video.mp4Url}
                            thumbnailUrl={image.video.thumbnailUrl}
                          />
                        ) : null}
                      </Styled.Media>
                    </Frame>
                  )}
                </Styled.Chapter>
              ))}
            </section>

            <Styled.GoToTop onClick={goBackToTopHandler}>
              <UpArrow />
              Wróć do góry
            </Styled.GoToTop>
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
          alt
          video {
            mp4Url
            thumbnailUrl
          }
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
