import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: ${({ $isFlex }) => $isFlex && 'flex'};
`;

const StyledFrame = styled.div`
    display: ${({ $hideMobile }) => ($hideMobile ? 'none' : 'initial')};
    position: absolute;
    background-color: ${({ theme }) => theme.colors.sand};
    width: 160px;
    height: 5px;
    left: ${({ $hideMobile }) => !$hideMobile && '50%'};
    transform: ${({ $hideMobile }) =>
        !$hideMobile ? 'translateX(-50%)' : 'unset'};
    bottom: ${({ $hideMobile }) => !$hideMobile && '-10px'};

    ${({ theme }) => theme.mq.tablet} {
        display: initial;
        width: 100px;
        height: 100px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%, 90% 10%, 0 10%);

        top: ${({ $upRight }) => ($upRight ? '-20px' : 'unset')};
        right: ${({ $upRight, $downRight }) =>
            $upRight || $downRight ? '-20px' : 'unset'};
        bottom: ${({ $upRight }) => (!$upRight ? '-20px' : 'unset')};
        left: ${({ $upRight, $downRight }) => {
            if ($upRight || $downRight) return 'unset';
            else return '-20px';
        }};
        transform: ${({ $upRight, $downRight }) => {
            if ($downRight) return 'rotate(90deg)';
            if (!$upRight) return 'rotate(-180deg)';
            else return 'unset';
        }};
    }
`;

const Frame = ({ children, upRight, downRight, hideMobile, isFlex }) => {
    return (
        <Wrapper $upRight={upRight} $downRight={downRight} $isFlex={isFlex}>
            <StyledFrame
                $upRight={upRight}
                $downRight={downRight}
                $hideMobile={hideMobile}
            ></StyledFrame>
            {children}
        </Wrapper>
    );
};

Frame.propTypes = {
    children: PropTypes.node.isRequired,
    upRight: PropTypes.bool,
    downRight: PropTypes.bool,
    hideMobile: PropTypes.bool,
};

export default Frame;
