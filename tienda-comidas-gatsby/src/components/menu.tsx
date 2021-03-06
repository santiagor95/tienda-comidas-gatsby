import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'gatsby-image'

import NumberFormat from 'react-number-format'
import useGetSection from '../hooks/useGetSection'
import useCategorias from '../hooks/useCategorias'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;
  .category-head{
    text-align : center;
    grid-column: 1 / -1;
    margin-top: 3rem;
    p{
      margin: 1rem 0;
    }
    h3{
      span{
        border-bottom: 2px solid;
      }
    }
  }
`

const ItemList = styled.div`
  /* border: 1px solid gray; */
  background: white;
    /* .item-image-content{
      width: 100%;
      min-height: 200px;
    } */
  .item-description{
    padding: .8em;
    line-height:1.2;
    text-align: center;
    span{
      font-family:'Lato', sans-serif;
      font-size: 1.5rem;
      text-align: center;
    }
    p{
      margin: 1rem 0;
    }
    .item-price{
      font-size: 1.5rem;
    }
  }
`

const Select = styled.select`
  padding: 1rem;
  appearance: none;
  font-family: 'Lato', sans-serif;
  flex: 1;
  margin: 2rem 0;
  width:100%;
`

const ItemMenu = ({ item }) => {

  const { imagen, nombre, descripcion, precio } = item

  // console.log('item', nombre);
  // useEffect(() => {

  // }, [])

  return (
    <ItemList>
      <div className='item-image-content'>
        {imagen ? <Image fluid={imagen.sharp.fluid} /> : null}
      </div>
      <div className='item-description'>
        <span>{nombre}</span>
        <hr />
        <p>{descripcion}</p>
        <p className='item-price'>
          <NumberFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </p>
      </div>
    </ItemList>
  )
}


const Menu = () => {

  const section = useGetSection('pg_menu')
  if (!section) return null
  const { nombre, imagen, contenido } = section

  const categorias = useCategorias()
  const [filterSelected, setFilterSelected] = useState('')

  const getListFiltered = useMemo(() => {
    if (!filterSelected) return categorias
    return categorias.filter(categoria => categoria.id === filterSelected)
  }, [categorias, filterSelected])

  // const setFilter = useCallback(
  //   (value) => {
  //     setFilterSelected(value)
  //   },
  //   [],
  // )

  // const getListFiltered = categorias.filter(categoria => categoria.id === filterSelected)

  return (
    <div css={css`
      /* background-color: rgb(0 0 0 / 5%); */
    `}>
      <section id='menu' className="contenedor">
        <h2>Nuestro menú</h2>

        {/* <Select onChange={(e) => setFilter(e.target.value)}>
          <option value={''} onClick={() => setFilter('')}>--Filtrar--</option>
          {categorias.map((categoria, i) => (
            <option key={i} value={categoria.id}>{categoria.nombre}</option>
          ))}
        </Select> */}

        <ListContainer>
          {categorias.map((categoria, i) => (
            <Fragment key={i}>
              <div className="category-head">
                <h3>
                  <span>{categoria.nombre.toUpperCase()}</span>
                </h3>
                {categoria.descripcion ? <p>{categoria.descripcion}</p> : null}
              </div>
              {categoria.menus.map((menu, i) => (
                <ItemMenu key={i} item={menu} />
              ))}
            </ Fragment>
          ))}
        </ListContainer>

      </section>
    </div>
  )
}

export default Menu
