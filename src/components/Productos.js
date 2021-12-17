import { Producto } from './Producto'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner'
import { useProductos } from '../hooks/useProductos'

const GridProductos = styled.div`
    width: 60vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 30px;
    row-gap: 50px;
`

const ContenedorProductos = styled.section`
    width: 100vw;
    height: auto;
    margin-top: 50px;
`

const TituloPorductos = styled.h2`
    font-size: 50px;
    font-weight: 700;
    font-style: italic;
    text-align: center;
    letter-spacing: 3px;
    margin-bottom: 50px;
`

const Productos = () => {
    const { listaP, l } = useProductos()
    return (
        <ContenedorProductos>
            <TituloPorductos>Productos</TituloPorductos>
            <GridProductos>
                {l.loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    l.data.map(item => {
                        return <Producto item={item} key={item._id} />
                    })
                )}
            </GridProductos>
        </ContenedorProductos>
    )
}

export default Productos
