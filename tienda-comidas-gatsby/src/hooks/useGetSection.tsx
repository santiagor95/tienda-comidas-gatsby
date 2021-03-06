import { graphql, useStaticQuery } from 'gatsby'

const useGetSection = (sectionCode: string) => {

  const result = useStaticQuery(
    graphql`
      query {
        allStrapiSecciones{
          nodes {
            codigo
            nombre
            contenido
            contenidoFormato
            imagen {
              sharp:childImageSharp{
                fluid(maxWidth: 1200, duotone:{
                  highlight: "#222222", shadow: "#192550", opacity: 30
                }){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
  `)

  const sectionFind = result.allStrapiSecciones.nodes.find(item => item.codigo === sectionCode)

  if (!sectionFind) return null
  return sectionFind
}

export default useGetSection
