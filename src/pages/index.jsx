import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const H1 = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    font-size: ${({ theme }) => theme.fontSize.heading};
    margin-left: 300px;
`;

const P = styled.div`
    width: 300px;
    font-family: ${({ theme }) => theme.fontFamily.noto};
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    margin-left: 300px;
    /* font-weight: bold; */
`;

const IndexPage = () => {
    return (
        <main>
            <H1>Main Page</H1>
            <P>
                <h4>Ciągły rozwój</h4>
                Nieustannie rozwijam swoją technikę taneczną, uczestnicząc w
                warsztatach prowadzonych przez wybitnych nauczycieli tańca
                orientalnego.
            </P>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="aktualnosci">Aktualności</Link>
                </li>
                <li>
                    <Link to="pokazy">Pokazy</Link>
                </li>
                <li>
                    <Link to="zajecia">Zajęcia</Link>
                </li>
                <li>
                    <Link to="kontakt">Kontakt</Link>
                </li>
            </ul>
        </main>
    );
};

export default IndexPage;
