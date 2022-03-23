import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
`;

const StyledFrame = styled.div`
    display: none;

    ${({ theme }) => theme.mq.tablet} {
        display: initial;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.sand};
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
        }};
    }
`;

const Frame = ({ children, upRight, downRight }) => {
    return (
        <Wrapper>
            <StyledFrame
                $upRight={upRight}
                $downRight={downRight}
            ></StyledFrame>
            {children}
        </Wrapper>
    );
};

Frame.propTypes = {
    children: PropTypes.node.isRequired,
    upRight: PropTypes.bool,
    downRight: PropTypes.bool,
};

export default Frame;
