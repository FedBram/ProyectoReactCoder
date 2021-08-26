import React from 'react';
import {Link} from 'react-router-dom';
import './Item.scss'

//COMPONENTS
import ItemCount from '../ItemCount/ItemCount';


const Item = (({onAdd, data}) => {
    return(
        <div className="products__cards__elements">
            <Link to = {`/item/${data.id}`}>
                <img src= {data.img} alt = {data.titulo} />
                <h6>{data.titulo}</h6>
                <p>{data.artista}</p>
                <p>${data.precio}</p>
            </Link>
            <ItemCount
                stock = {data.stock}
                initial = {0}
                onAdd = {onAdd}
            /> 
        </div>
    )
})

export default Item