import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';
import useGetSection from '../hooks/useGetSection';
import { css } from '@emotion/react';

const ImageBackground = styled(BackgroundImage)`
    height: 550px;
`

const Encuentra = () => {

	const section = useGetSection('pg_banner1')
	if (!section) return null
	const { nombre, imagen, contenido } = section

	return (
		<ImageBackground
			css={css`
				background-attachment: fixed;
			`}
			tag="section" fluid={imagen.sharp.fluid} fadeIn="soft" >
			<div className={'contenedor'} css={css`
			    color: #fff;
					height: 100%;
					max-width: 960px;
					display: flex;
					margin: 0 auto;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					h3 {
						text-align: center;
						font-size: 3rem;
						margin: 0;
					}
			`}>
				<h3 className={heroCSS.titulo}>{nombre}</h3>
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
				</p>
			</div>
		</ImageBackground>
	);
}

export default Encuentra;