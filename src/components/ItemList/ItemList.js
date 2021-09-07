<<<<<<< HEAD
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


=======
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


>>>>>>> c56e865766192ede4de5dcd15a5176cbcfb8c715
export default ItemList