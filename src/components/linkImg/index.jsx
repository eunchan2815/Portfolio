import React from 'react'
import * as S from './style';

const LinkImg = ({src, link}) => {
  return (
      <a href = {link}target='_blank'>
      <S.Images src = {src} />
      </a>
  )
}

export default LinkImg
