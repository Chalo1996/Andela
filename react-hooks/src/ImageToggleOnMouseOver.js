import React, { useRef } from 'react';

const ImageToggleOnMouseOver = ( { primaryImg, secondaryImg } ) => {
  const imageRef = useRef( null );

  const handleMouseOver = () => {
    if ( imageRef.current ) {
      imageRef.current.src = secondaryImg;
    }
  };

  const handleMouseOut = () => {
    if ( imageRef.current ) {
      imageRef.current.src = primaryImg;
    }
  };


  return (
    <img
      onMouseOver={ handleMouseOver }
      onMouseOut={ handleMouseOut }
      src={ primaryImg }
      alt="" ref={ imageRef }/>
  );
};

export default ImageToggleOnMouseOver;
