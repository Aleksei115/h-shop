import React, { useContext } from 'react'
import Context from '../../context/ContextUser'
import { useParams } from 'react-router-dom'
import NavbarUser from '../nav/Navbar'
import Spinner from 'react-bootstrap/Spinner'
import { useUser } from '../../hooks/useUser'
import { useProductos } from '../../hooks/useProductos'
import {
    DivContenedor,
    DivContenedorImg,
    ContenedorInfo,
    StyledH3,
    StyledH5,
    StyledDescription,
    Precio,
    Button,
} from './styles'

function Product({ dataProducto, handlers, agregarAlCarro, agregarCantidad }) {
    return (
        <DivContenedor>
            <DivContenedorImg url={dataProducto.image}></DivContenedorImg>
            <ContenedorInfo>
                <StyledH3>{dataProducto.product_name}</StyledH3>
                <StyledH5>Marca : {dataProducto.brand}</StyledH5>
                <StyledH5>Categoria : {dataProducto.category}</StyledH5>
                <StyledDescription>
                    <span>Descripción: </span>
                    {dataProducto.description}
                </StyledDescription>
                <Precio>{dataProducto.price} MXN</Precio>

                {handlers ? (
                    handlers
                ) : (
                    <Button
                        onClick={() => {
                            agregarAlCarro(
                                dataProducto._id,
                                1,
                                dataProducto.price,
                                dataProducto.image,
                                dataProducto.product_name
                            )
                            agregarCantidad()
                        }}
                    >
                        Agregar al carrito
                    </Button>
                )}
            </ContenedorInfo>
        </DivContenedor>
    )
}

function withRegisteredUser(Product) {
    return class extends React.Component {
        render() {
            return <Product {...this.props} handlers={<p>Inicia Sesión para Comprar o Registrate</p>} />
        }
    }
}

export const VistaProducto = () => {
    const NoLoginProduct = withRegisteredUser(Product)
    const { productoId } = useParams()
    const { listaP, l } = useProductos()
    const { isLogged, carritoCompras, jwt, agregarAlCarro, agregarCantidad } = useUser()
    let dataProducto = null
    if (listaP) dataProducto = l.data.find(item => item._id === productoId)
    return (
        <>
            {l.loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <NavbarUser />
                    {isLogged ? (
                        <Product
                            dataProducto={dataProducto}
                            agregarAlCarro={agregarAlCarro}
                            agregarCantidad={agregarCantidad}
                        />
                    ) : (
                        <NoLoginProduct
                            dataProducto={dataProducto}
                            agregarAlCarro={agregarAlCarro}
                            agregarCantidad={agregarCantidad}
                        />
                    )}
                </>
            )}
        </>
    )
}
