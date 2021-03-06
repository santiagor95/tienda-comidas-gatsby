import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react'
import { FaChevronUp } from "react-icons/fa";

const TopButtonStyled = styled.div`
  position:fixed;
  bottom:0;
  right:0;
  cursor: pointer;
  background-color: var(--main-bg-color);
  color:white;
  margin:.8em;
  width:40px;
  height:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:3px;
  opacity:.9;
  /* z-index: 1; */
  span{
    font-size:2em;
  }
`

const TopButton = () => {

  const [displayTopButton, setDisplayTopButton] = useState(false)
  // console.log(inicio);

  // const { nombre, contenido, imagen } = inicio[0]

  useEffect(() => {
    document.addEventListener('scroll', function (e) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setDisplayTopButton(true)
      } else {
        setDisplayTopButton(false)
      }
    });
  }, [])

  const onClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!displayTopButton) return null

  return (
    <TopButtonStyled onClick={() => onClickTop()}>
      <FaChevronUp />
    </TopButtonStyled >

  )
}

export default TopButton
