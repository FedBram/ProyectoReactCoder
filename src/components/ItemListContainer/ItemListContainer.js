import axios from 'axios';
import React, {useState, useEffect} from 'react';

//COMPONENTS
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ( {titulo} ) => {

    //PETICION ASINCRONA
    const [data, setData] = useState([])
    
    useEffect(() => {
        setTimeout(() =>{
            axios(
                'https://mocki.io/v1/8316aa62-6ddf-4075-89c3-c2c6e56fc0cf'
            ).then((res) => setData(res.data))
        }, 2000);
    }, [])


    //EVENTO OnAdd
    const onAdd = () => {
        console.log('Item agregado al carrito')
    }


    return (
        <div>
        <h1> {titulo} </h1>
        <ItemList 
            onAdd = {onAdd}
            data = {data}
        />
        </div>
    )
}

export default ItemListContainer