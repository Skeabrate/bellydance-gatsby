import React, { useContext } from 'react';
import LightboxContext from '../../context/LightboxContext';
import YetAnotherLightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/styles.css';

export default function Lightbox() {
  const { lightbox, closeLightbox } = useContext(LightboxContext);

  return (
    <YetAnotherLightbox
      styles={{
        container: {
          backgroundColor: 'rgba(0, 0, 0, .9)',
          thumbnailsContainer: { backgroundColor: 'rgba(0, 0, 0, .8)' },
        },
      }}
      plugins={[Fullscreen, Counter, Thumbnails, Zoom, Video]}
      open={lightbox.isOpen}
      close={closeLightbox}
      slides={lightbox.slides.map(({ url, gatsbyImageData }, index) => {
        if (gatsbyImageData)
          return {
            key: index,
            src: url,
          };
        else
          return {
            type: 'video',
            key: index,
            src: url,
            width: '100%',
            height: '100%',
            sources: [{ src: url, type: 'video/mp4' }],
          };
      })}
      index={lightbox.initialIndex}
      carousel={{ finite: true }}
    />
  );
}
