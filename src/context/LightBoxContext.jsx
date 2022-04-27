import React from 'react';

const LightBoxContext = React.createContext({
  lightBoxData: [],
  setLightBoxData: () => {},
  imgIndex: 0,
  setImgIndex: () => {},
});

export default LightBoxContext;
