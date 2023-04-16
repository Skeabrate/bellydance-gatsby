import React from 'react';
import * as Styled from 'assets/styles/pages/blog-post.styles';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { getDate } from 'utils/getDate';
import Calendar from 'assets/images/SVG/calendar.svg';
import LeftArrow from 'assets/images/SVG/thinArrow.svg';
import UpArrow from 'assets/images/SVG/upArrow.svg';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Heading from 'components/Heading/Heading';
import Video from 'components/Video/Video';
import PostOrnament from 'components/PostOrnament/PostOrnament';

export const Head = ({ data }) => (
  <HeadComponent
    title={data.contentfulBlog.title}
    description={data.contentfulBlog.meta_description}
  />
);

const MediaWrapper = ({ children }) => {
  return (
    <PostOrnament>
      <Styled.Media>{children}</Styled.Media>
    </PostOrnament>
  );
};

const renderOptions = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const { gatsbyImageData, description, url } = node.data.target;
      if (gatsbyImageData) {
        return (
          <MediaWrapper>
            <GatsbyImage
              image={gatsbyImageData}
              alt={
                description ||
                'Agnieszka Świeczkowska Leyla bellydance taniec brzucha, taniec orientalny Włocławek, Płock'
              }
            />
          </MediaWrapper>
        );
      } else if (url) {
        return (
          <MediaWrapper>
            <Video source={url} />
          </MediaWrapper>
        );
      } else {
        return null;
      }
    },
  },
};

export default function BlogPost({
  data: {
    contentfulBlog: { title, content, date, createdAt },
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
    <MainWrapper>
      <ContentWrapper>
        <Styled.Wrapper>
          <Styled.GoBack to='/blog'>
            <LeftArrow />
            Wróć do listy
          </Styled.GoBack>

          <Heading
            label={title}
            isMain
          />

          <Styled.Date>
            <Calendar /> {getDate(date, createdAt)}
          </Styled.Date>

          <Styled.Content>{renderRichText(content, renderOptions)}</Styled.Content>

          <Styled.GoToTop onClick={goBackToTopHandler}>
            <UpArrow />
            Wróć do góry
          </Styled.GoToTop>
        </Styled.Wrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

export const query = graphql`
  query ($link: String!) {
    contentfulBlog(link: { eq: $link }) {
      title
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            description
            url
          }
        }
      }
      date
      createdAt
      meta_description
    }
  }
`;
