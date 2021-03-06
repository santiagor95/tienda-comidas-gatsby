import { graphql, useStaticQuery } from 'gatsby'

const useMenu = () => {

  const result = useStaticQuery(
    graphql`
      query {
        allStrapiMenus {
          nodes {
            id
            nombre
            descripcion
            precio
            categorias{
              id
              nombre
            }
            imagen{
              sharp: childImageSharp {
                fluid( maxWidth: 1200 ){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }    
  `)

  return result.allStrapiMenus.nodes.map(item => ({
    id: item.id,
    nombre: item.nombre,
    descripcion: item.descripcion,
    imagen: item.imagen,
    precio: item.precio,
    categorias: item.categorias,
  }))

}

export default useMenu

// creacion de menu con graphql
// mutation($nombre:String, $descripcion:String) {
//   createMenu(
//     input: {
//       data:{
//         nombre: $nombre, precio:6000, descripcion: $descripcion, categoria:"600f34c43be7d6217c6c01c2"
//       }
//     }
//   ) {
//     menu {
//       id
//       nombre
//       precio
//       descripcion
//       categoria{
//         nombre
//       }
//     }
//   }
// }
