import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./CartWidget.scss"
import carritoImg from "./carrito.png"

//COMPONENTS
import { CartContext } from "../CartContext/CartContext";


const CartWidget = () => {

    const {carrito, totalQuantity} = useContext(CartContext)

    return (
        <div className = "inconDiv">
            <Link to = {'/cart'}><img src = { carritoImg } alt = "Carrito de compras"/></Link>
            {carrito.length != 0 ? <span>{totalQuantity}</span> : <div></div>}
        </div>
    )
};


export default CartWidget;