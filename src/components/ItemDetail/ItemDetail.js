import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.scss';

//COMPONENTS
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext';
    

const ItemDetail = (({dataDetail}) => {

    const [productsQuantity, setProductsQuantity] = useState(Number());
    const [finish, setFinish] = useState(false)

    const {agregarCarrito, quitarItem, quitarTodo} = useContext(CartContext)

    //EVENTO OnAdd
    const onAdd = quantityToAdd => {
        setProductsQuantity(Number(quantityToAdd));
        if (quantityToAdd >= 1 && dataDetail.stock !== 0){
            agregarCarrito(dataDetail, Number(quantityToAdd), Number(dataDetail.precio))
            console.log('precio', Number(dataDetail.precio))
            setFinish(true)
        }else {
            console.log('NO QUEDAN MAS PRODUCTOS EN STOCK PARA AGREGAR')
        }
    }

    // const borrarItem = () => {
    //     quitarItem(dataDetail.id)
    // }

    // const clear = () => {
    //     quitarTodo()
    // }


    return (
        <React.Fragment>
        <div className = "item">
            <div className = 'item__img'>
                <img src = {dataDetail.img} alt = {dataDetail.titulo}/>
            </div>
            <div className = 'item__info'>
                <h2>{dataDetail.artista} - {dataDetail.titulo}</h2>
                <div className = 'item__info__track'>
                    <h5>TRACKLIST</h5>
                    <h6>LADO A</h6>
                    <span>{dataDetail.tracksA}</span>
                    <h6>LADO B</h6>
                    <span>{dataDetail.ladoB}</span>
                </div>
                <div>
                    <p>${dataDetail.precio}</p>
                </div>
                {finish ? 
                    <button className = "item__btnFinish"><Link to = "/cart">FINALIZAR COMPRA</Link></button> 
                    : 
                    <ItemCount stock = {dataDetail.stock} initial = {1} onAdd = {onAdd} />
                }
                {/* <button onClick = {borrarItem} className="btnDelete">Eliminar</button>     
                <button onClick = {clear} className='btnClear'>Borrar todo</button>            */}
            </div>
        </div>
        </React.Fragment>
    )
})




export default ItemDetail