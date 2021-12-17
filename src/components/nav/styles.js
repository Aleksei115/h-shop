import Autocomplete from '@mui/material/Autocomplete'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledDir = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    position: fixed;
    top: 0;
    background-color: azure;
    z-index: 2;
`

export const InputBox = styled(Autocomplete)`
    width: 50%;
`
export const Button = styled.button`
    width: 130px;
    height: 45px;
    margin: 10px;
    font-size: 1em;
    border-radius: 3px;
    border: 2px solid #0ac1a8;
    color: ${props => props.color};
    font-weight: ${props => props.bold && 'bold'};
    background-color: ${props => (props.login ? '#0ac1a8' : '#ffffff')};
    text-transform: capitalize;

    cursor: pointer;
`

export const StyledNavLink = styled(NavLink)`
    width: 20%;
    height: 45px;
    margin: 10px;
    font-size: 1em;
    color: #0ac1a8;
    border-radius: 3px;
    border: 2px solid #0ac1a8;
    font-weight: bold;
    background-color: ${props => (props.login ? '#0ac1a8' : '#ffffff')};
    text-transform: capitalize;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const StyledContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 60px;
    height: 80px;
`
