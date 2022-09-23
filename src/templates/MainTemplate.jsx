import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import 'assets/styles/normalize.css';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import LightBoxContext from 'context/LightBoxContext';
import LightBox from 'components/LightBox/LightBox';

export const MainTemplate = ({ children }) => {
  const [lightBoxData, setLightBoxData] = useState([]);
  const [imgIndex, setImgIndex] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LightBoxContext.Provider value={{ lightBoxData, setLightBoxData, imgIndex, setImgIndex }}>
        <Navigation />
        {children}
        <Footer />
        {imgIndex !== false ? <LightBox /> : null}
      </LightBoxContext.Provider>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
