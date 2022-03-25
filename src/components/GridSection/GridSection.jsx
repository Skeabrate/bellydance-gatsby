import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
    display: grid;
    align-items: ${({ $isSand }) => ($isSand ? 'flex-end' : 'center')};
    column-gap: 6rem;
    row-gap: ${({ $isSand }) => ($isSand ? '5rem' : '3rem')};

    ul {
        list-style: none;

        li {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 6px;
            align-items: baseline;
            margin-top: 12px;

            ${({ theme }) => theme.mq.bigDesktop} {
                margin-top: 2rem;
            }
        }
    }

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: ${({ $isBig }) => ($isBig ? '1fr' : '1fr 1fr')};

        &:nth-child(2n) {
            article {
                grid-column: ${({ $isBig }) => ($isBig ? '1' : '2')};
                grid-row: 1;
            }
        }
    }

    ${({ theme }) => theme.mq.desktop} {
        grid-template-columns: 1fr 1fr;

        &:nth-child(2n) {
            article {
                grid-column: 2;
            }
        }
    }

    ${({ theme }) => theme.mq.huge} {
        column-gap: 8rem;
    }
`;

const GridSection = ({ children, isBig, isSand }) => {
    return (
        <StyledSection $isBig={isBig} $isSand={isSand}>
            {children}
        </StyledSection>
    );
};

GridSection.propTypes = {
    children: PropTypes.node.isRequired,
    isBig: PropTypes.bool,
    isSand: PropTypes.bool,
};

export default GridSection;
