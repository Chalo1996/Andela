import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/beautiful-girl1.jpg"
        secondaryImg="/static/speakers/beautiful-girl1.jpg" />
      &nbsp; &nbsp; &nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/sunflower-5012155.jpg"
        secondaryImg="/static/speakers/sunflower-5012155.jpg" />
    </div>
  );
};

export default ImageChangeOnMouseOver;
