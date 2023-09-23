import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
  const imgArray = [ 1124, 187, 823, 1269, 1530, 1725, 2920, 5996 ];
  return (
    <div>
      {
        imgArray.map( ( speakerId ) => {
          return (
            <div key={ speakerId }>
              <ImageToggleOnScroll
                primaryImg={ `/static/speakers/bw/Speaker-${ speakerId }.jpg` }
                secondaryImg={ `/static/speakers/Speaker-${ speakerId }.jpg` }
                alt="/static/speakers/Speaker-10803.jpg"
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ImageChangeOnScroll;
