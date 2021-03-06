import React from 'react'

import BackgroungImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import useGetSection from '../hooks/useGetSection'
import { css } from '@emotion/react'

const ImageBackgr = styled(BackgroungImage)`
  height: 100vh;
  /* height:400px; */
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  background-attachment: fixed;
  padding: 1rem;
  text-align: center;
  top: -72px;
  h1{
    font-size: 3rem;
    margin: 0;
    font-weight: 700;
    margin:.3rem 0;
  }
  p{
    margin-top: .5rem;
    font-size: 2rem;
  }
  @media (min-width: 992px){
    h1{
      font-size: 6rem;
      margin: 0;
    }
    p{
    font-size: 2.5rem;
    }
  }
`

const InicioSection = () => {

  const section = useGetSection('pg_ini')
  if (!section) return null

  const { nombre, imagen } = section

  return (
    <ImageBackgr tag="section" fluid={imagen.sharp?.fluid} fadeIn="soft" >
      <div css={css`
        display:flex;
        flex-direction:column;
      `}>
        <h1>Baozi Sushi</h1>
        <p>{section.contenido}</p>
        {/* <p>{section.contenidoFormato}</p> */}
      </div>
    </ImageBackgr>
  )
}

export default InicioSection
