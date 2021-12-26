import React from 'react'

import styled from 'styled-components';

const StyledAnimatedPage = styled.div`
  animation: animateIn 0.8s ease-in-out;

  @keyframes animateIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const AnimatedPage = ({children}) => {
    return <StyledAnimatedPage>{children}</StyledAnimatedPage>;
}


export default AnimatedPage
