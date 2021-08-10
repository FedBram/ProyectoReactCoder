import "./CartWidget.scss"
import carrito from "./carrito.png"


const CartWidget = () => {
    return (
        <div className = "inconDiv">
           <img src = { carrito } alt = "Carrito de compras"/>
        </div>
    )
};


export default CartWidget;