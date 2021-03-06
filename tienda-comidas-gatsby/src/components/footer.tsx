import React from 'react'
import styled from '@emotion/styled';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { css } from '@emotion/react';
import useRedesSociales from '../hooks/useRedesSociales';
import useGeneral from '../hooks/useGeneral';

const FooterTag = styled.footer`
  background-color: var(--main-bg-color);
  text-align:center;
  color: white;
  padding: 4rem 1rem;
`

const Footer = () => {

  const redes = useRedesSociales()
  const generalInfo = useGeneral()

  return (
    <FooterTag>

      <div css={css`
        display: flex;
        justify-content:center;
        font-size:2rem;
        color:#d8d8d8;
        a{
          color:#d8d8d8;
          margin-right:1rem;
          &:last-of-type{
            margin:0;
          }
        }
      `}>
        {redes.map(({ codigo, url }, i) => {
          let socialSelected: any = null
          switch (codigo) {
            case 'sn_fb':
              socialSelected = <FaFacebook />
              break
            case 'sn_ig':
              socialSelected = <FaInstagram />
              break
            case 'sn_wh':
              socialSelected = <FaWhatsapp />
              break
            case 'sn_tw':
              socialSelected = <FaTwitter />
              break
            case 'sn_yo':
              socialSelected = <FaYoutube />
              break
          }
          if (!socialSelected) return null
          return <a key={i} href={url} target="_blank">{socialSelected}</a>
        })}
      </div>


      <div css={css`
        font-size: .9rem;
        margin:0;
        color:#d8d8d8;
      `}>
        <p>Horarios: {generalInfo.horarios}</p>
        <p>{generalInfo.direccion}</p>
        <p css={css`
        font-style:italic;
      `}>{generalInfo.nombreTienda}. Todos los derechos reservados 2021 © by SoftTeam</p>
      </div>
    </FooterTag >
  )
}

export default Footer
