import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
`;

const StyledFrame = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    div {
        position: absolute;
        background-color: ${({ theme }) => theme.colors.sand};
        top: ${({ upMobile }) => upMobile && '-20px'};
        bottom: ${({ upMobile }) => !upMobile && '-20px'};
        right: 0;
        left: ${({ upMobile }) => !upMobile && '0px'};
        width: 80px;
        height: 10px;

        ${({ theme }) => theme.mq.tablet} {
            top: ${({ upMobile }) => (!upMobile ? '-20px' : 'unset')};
            bottom: ${({ upMobile }) => upMobile && '-20px'};
            right: ${({ upMobile }) => (!upMobile ? '-20px' : 'unset')};
            left: ${({ upMobile }) => (upMobile ? '-20px' : 'unset')};
        }
    }

    p {
        ${({ theme }) => theme.mq.tablet} {
            position: absolute;
            top: ${({ upMobile }) => (!upMobile ? '-20px' : 'unset')};
            bottom: ${({ upMobile }) => upMobile && '-20px'};
            right: ${({ upMobile }) => (!upMobile ? '-20px' : 'unset')};
            left: ${({ upMobile }) => (upMobile ? '-20px' : 'unset')};
            width: 10px;
            height: 80px;
            background-color: ${({ theme }) => theme.colors.sand};
        }
    }
`;

const Frame = ({ children, upMobile }) => {
    return (
        <Wrapper>
            <StyledFrame upMobile={upMobile}>
                <div></div>
                <p></p>
            </StyledFrame>

            {children}
        </Wrapper>
    );
};

Frame.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Frame;
