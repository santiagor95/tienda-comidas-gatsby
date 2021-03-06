import { graphql, useStaticQuery } from 'gatsby'

const useCategorias = () => {

  const result = useStaticQuery(
    graphql`
    query {
      allStrapiCategorias(sort: {fields: orden, order: DESC}) {
        nodes {
          id
          nombre
          descripcion
          menus {
            nombre
            descripcion
            precio
            imagen {
              sharp: childImageSharp {
                fluid( maxWidth: 600 ){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
     
  `)

  return result.allStrapiCategorias.nodes.map(item => ({
    id: item.id,
    nombre: item.nombre,
    descripcion: item.descripcion,
    menus: item.menus,
  }))

}

export default useCategorias
