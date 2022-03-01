import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <main>
            <h1>Main Page</h1>

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
