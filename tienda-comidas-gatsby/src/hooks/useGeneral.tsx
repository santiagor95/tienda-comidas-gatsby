import { graphql, useStaticQuery } from 'gatsby'

const useGeneral = () => {

  const result = useStaticQuery(
    graphql`
    query {
      allStrapiGeneral {
        nodes {
          nombreTienda
          horarios
          celular1
          telefono
          pais
          ciudad
          logo {
            sharp: childImageSharp {
              fluid( maxWidth: 600 ){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return result.allStrapiGeneral.nodes[0]

}

export default useGeneral
