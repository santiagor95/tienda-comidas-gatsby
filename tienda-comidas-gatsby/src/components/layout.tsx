import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import { Global, css } from '@emotion/react'

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      {/* Estilos globales */}
      <Global
        styles={css`
          html {
            /* font-size: 62.5%; */
            box-sizing: border-box;
            scroll-behavior: smooth;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          body {
            /* font-size: 18px; */
            /* font-size: 1.8rem; */
            line-height: 1.5;
            font-family: 'Lato', sans-serif;
          }
          h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1, h2 {
            text-align: center;
            font-family: 'PT Sans', sans-serif;
            /* font-weight: 300; */
          }
          h3 {
            font-family: 'PT Sans', sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding:0;
          }
          .contenedor {
              max-width: 960px;
              margin: 0 auto;
              width: 95%;
              padding: 3em 1em;
          }
          img {
              max-width: 100%;
          }
          :root {
            --main-bg-color: #12232B;
            --secondary-color: #E8120C;
          }
        `}
      />

      {/* etiquetas que se agregan a index.html */}
      <Helmet
        htmlAttributes={{
          lang: 'es',
        }}>
        <meta http-equiv="content-language" content="es"></meta>
        <title>{data.site.siteMetadata?.title}</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
      </Helmet>

      <Header siteTitle={data.site.siteMetadata?.title || `Nombre tienda`} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

