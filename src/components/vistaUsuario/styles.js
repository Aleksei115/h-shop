import styled from 'styled-components'

export const DivContenedor = styled.div`
    width: 80%;
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -40%;
`

export const StyledH3 = styled.h3`
    font-size: 1.5em;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 10px;
    text-align: center;
`
export const Button = styled.button`
    width: 20%;
    min-width: 142px;
    height: 45px;
    position: relative;
    left: 40%;
    /* margin-left: -65px; */

    margin: 10px;
    font-size: 1em;
    border-radius: 3px;
    border: 2px solid #0ac1a8;
    color: ${props => props.color};
    font-weight: ${props => props.bold && 'bold'};
    background-color: ${props => (props.login ? '#0ac1a8' : '#ffffff')};
    text-transform: capitalize;

    cursor: pointer;

    @media only screen and (max-width: 896px) {
        & {
            left: 50%;
            margin-left: -71px;
        }
    }
`
