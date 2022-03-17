import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { StyledTitle, StyledHeader } from './Heading.styles';

const Heading = ({ label, isMain }) => {
    return (
        <StyledHeader isMain={isMain}>
            <StyledTitle>{label}</StyledTitle>
            <StaticImage
                src="../../assets/images/ornParag.png"
                alt="title ornament"
                placeholder="blurred"
                width={200}
            />
        </StyledHeader>
    );
};

Heading.propTypes = {
    label: PropTypes.string.isRequired,
    isMain: PropTypes.bool,
};

export default Heading;
