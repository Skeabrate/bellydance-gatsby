import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

export const MainTemplate = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navigation />
            {children}
            <Footer />
        </ThemeProvider>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};
