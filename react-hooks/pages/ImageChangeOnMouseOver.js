import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/Speaker-10803.jpg"
        secondaryImg="/static/speakers/Speaker-10803.jpg" />
      &nbsp; &nbsp; &nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/Speaker-1124.jpg"
        secondaryImg="/static/speakers/Speaker-1124.jpg" />
    </div>
  );
};

export default ImageChangeOnMouseOver;
