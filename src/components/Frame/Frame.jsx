import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
`;

const StyledFrame = styled.div`
    position: absolute;
    width: 80px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.sand};

    top: ${({ $upMobile }) => $upMobile && '-20px'};
    right: ${({ $upMobile }) => $upMobile && '0px'};
    bottom: ${({ $upMobile }) => !$upMobile && '-20px'};
    left: ${({ $upMobile }) => !$upMobile && '0px'};

    ${({ theme }) => theme.mq.tablet} {
        width: 100px;
        height: 100px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%, 90% 10%, 0 10%);

        top: ${({ $upMobile }) => (!$upMobile ? '-20px' : 'unset')};
        right: ${({ $upMobile }) => (!$upMobile ? '-20px' : 'unset')};
        bottom: ${({ $upMobile }) => ($upMobile ? '-20px' : 'unset')};
        left: ${({ $upMobile }) => ($upMobile ? '-20px' : 'unset')};
        transform: ${({ $upMobile }) => $upMobile && 'rotate(-180deg)'};
    }
`;

const Frame = ({ children, upMobile }) => {
    return (
        <Wrapper>
            <StyledFrame $upMobile={upMobile}></StyledFrame>
            {children}
        </Wrapper>
    );
};

Frame.propTypes = {
    children: PropTypes.node.isRequired,
    upMobile: PropTypes.bool,
};

export default Frame;
