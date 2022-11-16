import React from 'react';
import { graphql } from 'gatsby';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';

export default function BlogPost({
  data: {
    datoCmsBlog: { blogPostTitle, content, seo, date, meta },
  },
}) {
  console.log(blogPostTitle, content, seo, date, meta);

  return (
    <MainWrapper>
      <ContentWrapper>
        <h1>{blogPostTitle}</h1>
      </ContentWrapper>
    </MainWrapper>
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
