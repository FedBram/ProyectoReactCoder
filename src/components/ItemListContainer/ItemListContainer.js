import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//COMPONENTS
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner';

const ItemListContainer = ( {titulo} ) => {

    const {categoryId} = useParams()
    const [loaded, setLoaded] = useState(false)
    
    //PETICION ASINCRONA
    const [data, setData] = useState([])
    
    useEffect(() => {
        setTimeout(() =>{
            axios(
                'https://mocki.io/v1/0dd5338e-ea01-479c-b036-ee7a8307d9e7'
            ).then((res) => setData(categoryId ? res.data.filter(e=>e.cat === categoryId) : res.data))
            .finally(setLoaded(true))
        }, 1000);
    }, [categoryId])
    console.log('Data', data)

    //EVENTO OnAdd
    const onAdd = () => {
        console.log('Item agregado al carrito')
    }


    return (
        <div>
        <h1 className='title'> {titulo} </h1>
        {loaded ? <ItemList onAdd = {onAdd} data = {data} /> : <Spinner/> }
        
        </div>
    )
}

export default ItemListContainer