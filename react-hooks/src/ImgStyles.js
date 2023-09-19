import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  height: 200px;
  `

const ImgStyles = ({ src, alt }) => {
  return (
    <StyledImg src={ src } alt={ alt } />
  )
}

export default ImgStyles;
