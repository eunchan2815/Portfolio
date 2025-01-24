import React from 'react'
import styled, { keyframes } from 'styled-components';
import * as S from './style';

const fadeInAndSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedImageContainer = styled.div`
    animation: ${fadeInAndSlideUp} 0.7s ease forwards;
    animation-delay: ${props => props.index * 0.2}s;
    opacity: 0;

    &:hover img {
        transform: scale(1.1);
    }
`

const HoverImage = styled(S.Images)`
    transition: transform 0.3s ease;
`

const LinkImg = ({src, link, index}) => {
  return (
    <AnimatedImageContainer index={index}>
      <a href={link} target='_blank' rel="noopener noreferrer">
        <HoverImage src={src} />
      </a>
    </AnimatedImageContainer>
  )
}

export default LinkImg;