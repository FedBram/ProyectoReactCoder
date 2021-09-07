<<<<<<< HEAD
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


    return (
        <div>
        <h1 className='title'> {titulo} </h1>
        {loaded ? <ItemList data = {data} /> : <Spinner/> }
        
        </div>
    )
}

=======
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


    return (
        <div>
        <h1 className='title'> {titulo} </h1>
        {loaded ? <ItemList data = {data} /> : <Spinner/> }
        
        </div>
    )
}

>>>>>>> c56e865766192ede4de5dcd15a5176cbcfb8c715
export default ItemListContainer