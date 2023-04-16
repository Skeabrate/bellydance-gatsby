import React, { useState, useMemo, createContext, useCallback } from 'react';
import Lightbox from 'components/Lightbox/Lightbox';

const LightboxContext = createContext({});

const initialLightboxState = {
  slides: [],
  isOpen: false,
  initialIndex: 0,
};

export const LightboxProvider = ({ children }) => {
  const [lightbox, setLightbox] = useState(initialLightboxState);

  const closeLightbox = useCallback(() => setLightbox(initialLightboxState), []);
  const openLightbox = useCallback(
    (slides, initialIndex = 0) => setLightbox({ slides: slides, isOpen: true, initialIndex }),
    []
  );

  const value = useMemo(
    () => ({
      lightbox,
      openLightbox,
      closeLightbox,
    }),
    [lightbox, openLightbox, closeLightbox]
  );

  return (
    <LightboxContext.Provider value={value}>
      {lightbox.isOpen && <Lightbox />}
      {children}
    </LightboxContext.Provider>
  );
};

export default LightboxContext;
