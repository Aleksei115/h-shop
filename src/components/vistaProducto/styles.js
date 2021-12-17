import styled from 'styled-components'

export const DivContenedor = styled.div`
    width: 80vw;
    height: 80vh;
    margin: 150px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const DivContenedorImg = styled.div`
    width: 70vw;
    height: 70vw;
    max-width: 600px;
    max-height: 560px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${props => props.url});
    background-size: cover;
    justify-self: flex-start;
`

export const ContenedorInfo = styled.div`
    width: 60vw;
    height: 500px;
    max-width: 400px;
    margin-left: 30px;
    text-align: center;
`

export const StyledH3 = styled.h3`
    font-size: 2.5em;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 10px;
`

export const StyledH5 = styled.h5`
    margin-top: 20px;
    font-size: 1em;
    font-weight: 500;
    font-style: oblique;
    text-align: left;
    margin-left: 10px;
`

export const StyledDescription = styled.p`
    margin-top: 20px;
    font-size: 1em;
    font-weight: 500;
    font-style: oblique;
    text-align: left;
    margin-left: 10px;
`

// `

export const Precio = styled.h3`
    margin: 50px 0;
    font-size: 1.5em;
    font-weight: 700;
    font-style: italic;
    text-align: right;
    margin-right: 10px;
    color: #f44336;
`

export const Button = styled.button`
    width: 200px;
    height: 45px;
    margin: 10px;
    font-size: 1em;
    border-radius: 3px;
    padding: 0.25em 1em;
    border: 2px solid #0ac1a8;
    color: #0ac1a8;
    font-weight: 600;
    background-color: #ffffff;
    text-transform: capitalize;
    justify-self: ${props => props.position};
    cursor: pointer;
`
