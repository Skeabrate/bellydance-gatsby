import React from 'react';
import PropTypes from 'prop-types';
import Frame from 'components/Frame/Frame';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    row-gap: 4rem;
    column-gap: ${({ theme }) => theme.spacing.columnMobile};
    align-items: flex-end;

    article:last-child {
        background-color: ${({ theme }) => theme.colors.sand};
        color: ${({ theme }) => theme.colors.white};
        padding: 2rem;
        margin-top: 2rem;
    }

    ${({ theme }) => theme.mq.tablet} {
        article:last-child {
            padding: 3rem;
            margin-top: 3rem;
        }
    }

    ${({ theme }) => theme.mq.desktop} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.huge} {
        column-gap: ${({ theme }) => theme.spacing.columnHuge};
    }
`;

const SandSection = ({ data, children }) => {
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
