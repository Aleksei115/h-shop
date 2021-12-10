import React from 'react'
import styled from 'styled-components'
import img1 from '../img/img1.jpg' // with import

const DivBanner = styled.div`
    width: 100%;
    height: 600px;
    background-image: linear-gradient(to right bottom, rgba(128, 214, 113, 0.8), rgba(40, 180, 133, 0.8)),
        url(${props => props.url});
    background-size: cover; /*Se adapta al contenedor para que no se haga mosaico*/
    /* Position right hace que se esconda por izq cuando se hace pequena la pag al reves con position left */
    background-position: top; /*Hace que se fije al top y se mueve con el ancho de la pag*/
    clip-path: polygon(
        0 0,
        100% 0,
        100% 85%,
        0 100%
    ); /*La propiedad clip-path permite recortar una seccion del elemento existe circle(50%)*/

    &::after {
        content: 'Bienvenido a H-Shop';
        color: #262423;
        position: absolute;
        width: 70vw;
        height: 50px;
        left: 50%;
        margin-left: -35vw;
        top: 50%;
        margin-top: -200px;
        font-size: 70px;
        font-weight: 800;
        letter-spacing: 5px;
        font-style: italic;
        text-align: center;
        text-shadow: -5px -5px 3px rgba(128, 214, 113, 0.8);
    }
`

export const VistaGeneral = () => {
    return <DivBanner url={img1}></DivBanner>
}
