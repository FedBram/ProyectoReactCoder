import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import "./Cart.scss";



//COMPONENTS
import { CartContext } from "../CartContext/CartContext";


const Cart = () => {
    const { carrito, quitarItem, quitarTodo, totalPrice } = useContext(CartContext)

    return (
        <>
        <div className="carrito">
            <h2 className="carrito__title">CARRITO DE COMPRAS</h2>
            <div className="carrito__description">
                <h5 className="carrito__description__title">TITULO</h5>
                <h5 className="carrito__description__cant">CANTIDAD</h5>
                <h5 className="carrito__description__precio">SUBTOTAL</h5>
            </div>   
        {carrito.length === 0 ?
            <>
            <p className="carrito__vacio">EL CARRITO SE ENCUENTRA VACIO</p> 
            <div className="carrito__vacio__btn"><Link to = {'/'}>VER CATALOGO</Link></div>
            </>
            : carrito.map((item) => {
                //ELIMINAR UN ITEM DEL CARRITO
                const borrarItem = () => {
                    quitarItem(item.id)
                }
                return (                
                    <div className="carrito__cards" key={item.id}>
                        <div className="carrito__cards__elements">
                            <Link to = {`/item/${item.id}`} className="carrito__cards__elements__img">
                            {/* <div className="carrito__cards__elements__img"> */}
                                <img src={item.img} alt={item.titulo}/>
                            {/* </div> */}
                            </Link>
                            <div className="carrito__cards__elements__txt">
                                <h6>{item.titulo}</h6>
                                <p>{item.artista}</p>
                            </div>
                            <p className="carrito__cards__elements__amount">{item.quantity}</p>
                            <p className="carrito__cards__elements__price">${item.precioT}</p>
                            <button className="carrito__cards__elements__btnRemove" onClick={borrarItem}>X</button>
                        </div>
                    </div>                
                )
            })}           
            <div className="carrito__total">
                {carrito.length === 0 ? <> </> : 
                <>
                <button onClick={quitarTodo} className="carrito__total__btnClear">LIMPIAR CARRITO</button>
                <div>
                <span className="carrito__total__title">TOTAL</span>
                <span className="carrito__total__number">${totalPrice}</span>
                </div>
                <div className="carrito__total__btnBuy"><Link to = {'/form'}>REALIZAR COMPRA</Link></div>
                </>}

            </div>
        </div>
        </>
    )
}


export default Cart