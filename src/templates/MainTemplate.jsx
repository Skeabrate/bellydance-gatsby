import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import 'assets/styles/normalize.css';

import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

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
