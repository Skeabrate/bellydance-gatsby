import React from 'react';

const Video = ({ source, thumbnailUrl, preventDefault }) => {
  return (
    <video
      preload='metadata'
      poster={thumbnailUrl}
      controls
      width='100%'
      height='100%'
      onClick={(e) => preventDefault && e.preventDefault()}
    >
      <source
        src={`${source}#t=0.1`}
        type='video/mp4'
      />
    </video>
  );
};

export default Video;
