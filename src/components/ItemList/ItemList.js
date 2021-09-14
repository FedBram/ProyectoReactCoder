import React from 'react';
import './ItemList.scss'

//COMPONENTS
import Item from '../Item/Item'


const ItemList = (({ data }) =>{
   
    return (
        <div className = "prducts">
            {/* <h1 className = "prducts__title">Productos</h1> */}
            <div className = "products__cards">            
                {data.map( (e) => {
                    return (
                        <Item data = {e} key = {e.id} />
                    )
                })}              
            </div>
        </div>
    )
})


export default ItemList