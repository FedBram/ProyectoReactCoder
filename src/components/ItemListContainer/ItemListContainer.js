import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
// const URL = 'https://myjson.dit.upm.es/api/bins/1dmv'

const ItemListContainer = ( {titulo} ) => {

    const onAdd = () => {
        console.log('Item agregado al carrito')
    }



    return (
        <div>
        <h1> {titulo} </h1>
        <ItemCount
           stock = {6}
           initial = {0}
           onAdd = {onAdd}
        />
        </div>
    )
}

export default ItemListContainer