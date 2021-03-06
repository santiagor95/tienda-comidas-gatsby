import styled from '@emotion/styled'
import React from 'react'
import useGetSection from '../hooks/useGetSection'

const Section = styled.section`
  padding: 3em 1em;
  max-width:960px;
  margin:0 auto;
`

const Contact = () => {

  const section = useGetSection('pg_contacto')
  if (!section) return null
  const { nombre, imagen, contenido } = section

  return (
    <Section id='contacto'>
      <h2>{nombre}</h2>
      <p>{contenido}</p >
    </Section >
  )
}

export default Contact
