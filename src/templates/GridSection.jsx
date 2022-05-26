import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: grid;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing.columnGap};
  row-gap: 3rem;

  ul {
    list-style: none;
    width: 100%;
    word-break: break-word;

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
`;

const GridSection = ({ children, isBig }) => {
  return <StyledSection $isBig={isBig}>{children}</StyledSection>;
};

GridSection.propTypes = {
  children: PropTypes.node.isRequired,
  isBig: PropTypes.bool,
};

export default GridSection;
