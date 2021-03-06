import { graphql, useStaticQuery } from 'gatsby'

const useRedesSociales = () => {

  const result = useStaticQuery(
    graphql`
      query MyQuery {
        allStrapiRedesSociales {
          nodes {
            nombre
            codigo
            url
          }
        }
      }         
  `)

  return result.allStrapiRedesSociales.nodes.map(item => ({
    codigo: item.codigo,
    nombre: item.nombre,
    url: item.url,
  }))

}

export default useRedesSociales
