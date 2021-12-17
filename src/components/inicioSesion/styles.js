import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/esm/FormLabel'
export const Button = styled.button`
    width: 200px;
    height: 45px;
    margin: 20px auto;
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
export const StyledForm = styled(Form)`
    width: 70%;
    max-width: 600px;
    height: 300px;
    margin: 100px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`
export const StyledLabel = styled(Form.Label)`
    width: 100%;
    height: 50px;
    font-size: 30px;
    font-style: oblique;
`

export const StyledGroup = styled(Form.Group)`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
`

export const StyledControl = styled(Form.Control)`
    width: 60%;
    height: 50px;
    outline: none;
    background: none;
    border: none;
    border-bottom: 2px solid #71b48d;
    color: var(--color-font);
    font-size: 20px;
    transition: width 2s;
    -webkit-transition: width 2s; /*safari and chrome */
    justify-self: center;

    &:hover {
        width: 90%;
        transition: width 2s;
        -webkit-transition: width 2s; /*safari and chrome */
    }
`

export const TituloPagina = styled.h2`
    margin: 100px auto;
    font-size: 50px;
    font-weight: 700;
    font-style: italic;
    text-align: center;
    letter-spacing: 3px;
    margin-bottom: 50px;
`
