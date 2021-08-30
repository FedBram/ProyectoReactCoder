import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.scss';

//COMPONENTS
import ItemCount from '../ItemCount/ItemCount';
    

const ItemDetail = (({dataDetail}) => {

    const [productsQuantity, setProductsQuantity] = useState(Number());
    const [finish, setFinish] = useState(false)

    //EVENTO OnAdd
    const onAdd = quantityToAdd => {
        setProductsQuantity(Number(quantityToAdd));
        if (quantityToAdd >= 1){
            console.log('Cantidad de productos agregados:', quantityToAdd)
            setFinish(true)
        }
    }
    console.log('Cantidad de productos agregados:',productsQuantity)

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
                    <ItemCount stock = {dataDetail.stock} initial = {0} onAdd = {onAdd} />
                }                
            </div>
        </div>
        </React.Fragment>
    )
})




export default ItemDetail