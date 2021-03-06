import React from "react"
import Layout from '../components/layout'
import InicioSection from '../components/inicioSection'

import NosotrosSection from "../components/nosotros";
import ContactSection from "../components/contact";
import MenuSection from "../components/menu";
import EncuentraSection from "../components/encuentra";
import TopButton from "../components/top-button";

const IndexPage = () => {

  return (
    <Layout>
      <InicioSection />
      <NosotrosSection />
      <EncuentraSection />
      <MenuSection />
      <ContactSection />
      <TopButton />
    </Layout>
  )
}

export default IndexPage
