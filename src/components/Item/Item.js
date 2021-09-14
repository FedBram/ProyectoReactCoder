import React from 'react';
import {Link} from 'react-router-dom';
import './Item.scss'

//COMPONENTS
// import ItemCount from '../ItemCount/ItemCount';


const Item = (({ data }) => {
    return(
        <div className="products__cards__elements">
            <Link to = {`/item/${data.id}`}>
                <img src= {data.img} alt = {data.titulo} />
            </Link>          
                <h6>{data.titulo}</h6>
                <p>{data.artista}</p>
                <p>${data.precio}</p>              
            <div className="products__cards__elements__link">
                <Link to = {`/item/${data.id}`}>COMPRAR</Link>
            </div>
        </div>
    )
})

export default Item