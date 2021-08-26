import React from 'react';
import './ItemDetail.scss';



const ItemDetail = (({dataDetail}) => {

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
            </div>
        </div>
        </React.Fragment>
    )
})




export default ItemDetail