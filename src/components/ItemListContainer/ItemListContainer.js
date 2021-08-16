import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ( {titulo} ) => {
    return (
        <div>
        <h1> {titulo} </h1>
        <ItemCount
           stock = "6"
           initial = "0"
           onAdd = "1"
        />
        </div>
    )
}

export default ItemListContainer