import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import useGetSection from '../hooks/useGetSection'

const Contenido = styled.div`
  display: grid;
  gap: 3rem;
  margin-top:2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Nosotros = () => {

  const section = useGetSection('pg_nosotros')
  if (!section) return null
  const { nombre, imagen, contenido } = section

  return (
    <section id='nosotros' className="contenedor">
      <h2>{nombre}</h2>
      <Contenido>
        <p>{contenido}</p>
        <Image fluid={imagen.sharp.fluid} />
      </Contenido>
    </section>
  )
}

export default Nosotros
