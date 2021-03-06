import React, { useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'gatsby-image'
import { FaBars, FaTimes } from "react-icons/fa";

// position: fixed;
// background: green;
// height: 100%;
// top: 0;
// left: 0;
// width: 100%; / 0
// width: 0;
// overflow-x: hidden;
// transition: 0.5s;
// padding-top: 60px;
// text-align: center;
// z-index: 1;

import useGeneral from '../hooks/useGeneral';

const EnlaceHome = styled(Link)`
  color: #FFF;
  text-align: center;
  text-decoration: none;
  /* width:80px; */
  max-height:47px;
  overflow: hidden;
  display:flex;
  align-items:center;
  justify-content: center;
  h1{
    margin:0
  }
`;

// const Header = styled.header`

// `

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 72px;
  z-index: 1;
  /* background-color: var(--main-bg-color); */
  padding: .5rem 1.5rem;
  overflow:hidden;
`


const HeaderContainer = styled.div`
  max-width: 1200px;
  width:100%;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    position: fixed;
    width: ${(props: any) => props.menuVisible ? '100%' : 0};
    top: 0;
    left: 0;
    height: 100%;
    overflow-x: hidden;
    transition: 0.5s;
    text-align: center;
    z-index: 2;
    padding-top: 60px;
    background: #000000cf;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction:column;
  @media (min-width:768px){
    flex-direction:row;
    a:last-of-type{
      padding-right:0;
    }
  }
  a{
    color: #ffffffb8;
    text-decoration:none;
    padding:1rem;
    font-weight:600;
    &.actual-page{
      border-bottom: 2px solid;
    }
  }
`;

const IconButton = css`
  /* position: absolute; */
  color: white;
  font-size:1.5em;
  cursor: pointer;
  top: 0;
  right:0;
  /* margin:1rem; */
  @media (min-width:768px){
    display: none;
  }
`
let fromMobile = false

const Header = ({ siteTitle }) => {

  const [menuVisible, setMenuVisible] = useState(false)
  const generalInfo = useGeneral()

  // const scrollTo = (e) => {
  //   e.preventDefault()
  //   setMenuVisible(false)
  //   // console.log(e);
  //   const scrollTop = document.getElementById(e.target.hash.replace('#', ''))?.offsetTop;
  //   if (!scrollTop) return
  //   window.scrollTo({
  //     top: scrollTop - 67,
  //     behavior: 'smooth',
  //   })
  // }

  const toogleMenu = () => {
    if (!fromMobile) return
    setMenuVisible((current) => {
      let value = ''
      if (!current) value = 'hidden'
      document.body.style.overflow = value
      return !current
    })
  }

  return (
    <MainHeader>
      <div css={css`
            width:90px;
            min-width:90px;
            max-height: 47px;
            overflow: hidden;
            @media (min-width:768px){
              display: none;
            }
          `}>
        <Image fluid={generalInfo.logo.sharp.fluid} />
      </div>
      <FaBars css={IconButton} onClick={() => {
        fromMobile = true

        toogleMenu()
      }} />
      <HeaderContainer menuVisible={menuVisible}>

        <FaTimes
          css={[IconButton, css`
            position: absolute;
            margin: 1.5rem 1.5rem;
          `]}
          onClick={toogleMenu}
        />

        <EnlaceHome to='/' activeClassName='actual-page'>
          <div css={css`
            width:90px;
            min-width:90px;
            max-height: 47px;
            overflow: hidden;
          `}>
            <Image fluid={generalInfo.logo.sharp.fluid} />
          </div>
        </EnlaceHome>

        <NavList>
          {/* <Link to={'/#nosotros'} onClick={(e) => scrollTo(e)} activeClassName='actual-page'>Nosotros</Link>
          <Link to={'/#menu'} onClick={(e) => scrollTo(e)} activeClassName='actual-page'>Menu</Link>
          <Link to={'/#contacto'} onClick={(e) => scrollTo(e)} activeClassName='actual-page'>Contacto</Link> */}
          <Link to={'/#nosotros'} onClick={toogleMenu} activeClassName='actual-page'>Nosotros</Link>
          <Link to={'/#menu'} onClick={toogleMenu} activeClassName='actual-page'>Menu</Link>
          <Link to={'/#contacto'} onClick={toogleMenu} activeClassName='actual-page'>Contacto</Link>
        </NavList>

      </HeaderContainer>
    </MainHeader  >
  );
}

export default Header;