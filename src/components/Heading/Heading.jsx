import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Heading.styles';
import { StaticImage } from 'gatsby-plugin-image';

const Heading = ({ label, isMain, as }) => {
  return (
    <Styled.Wrapper
      $isMain={isMain}
      id={`${isMain ? 'heading' : 'other'}`}
    >
      <Styled.Title as={as ? as : isMain ? 'h1' : 'h2'}>{label}</Styled.Title>
      <StaticImage
        src='../../assets/images/ornParag.png'
        aria-hidden='true'
        alt=''
        placeholder='blurred'
        width={200}
      />
    </Styled.Wrapper>
  );
};

Heading.propTypes = {
  label: PropTypes.string.isRequired,
  isMain: PropTypes.bool,
  as: PropTypes.string,
};

export default Heading;
