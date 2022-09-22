import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Frame from 'components/Frame/Frame';

const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  row-gap: 1rem;
  column-gap: ${({ theme }) => theme.spacing.columnGap};

  article:last-child {
    background-color: ${({ theme }) => theme.colors.sand};
    color: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    margin-top: 2rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    row-gap: 6rem;

    article:last-child {
      padding: 3rem;
      margin-top: 3rem;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`;

const SandSection = ({ data = [], children }) => {
  return (
    <Frame>
      <Wrapper>
        <div>
          {data.map(({ id, title, desc }) => (
            <article key={id}>
              <header>
                <h2>{title}</h2>
              </header>
              <p>{desc}</p>
            </article>
          ))}
        </div>

        {children}
      </Wrapper>
    </Frame>
  );
};

SandSection.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default SandSection;
