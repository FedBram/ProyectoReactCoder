import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//FIREBASE
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

//COMPONENTS
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner';

const ItemListContainer = ( {titulo} ) => {

    const {categoryId} = useParams()
    const [loaded, setLoaded] = useState(false)
  
    
    //PETICION ASINCRONA
    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        
        const getProducts = async () => {
            const docs = [];
            const q = query(collection(db, "vinyls"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            docs.push({...doc.data(), id: doc.id})        
            });
            setData(categoryId ? docs.filter(e=>e.cat === categoryId) : docs)
        }
        getProducts()
        // setTimeout(() =>{
        //     axios(
        //         'https://mocki.io/v1/0dd5338e-ea01-479c-b036-ee7a8307d9e7'
        //     ).then((res) => setData(categoryId ? res.data.filter(e=>e.cat === categoryId) : res.data))
        //     .finally(setLoaded(true))
        // }, 1000);
    }, [categoryId])


    return (
        <div>
        <h1 className='title'> {titulo} </h1>
        {/* {loaded ? <ItemList data = {data} /> : <Spinner/> } */}
        <ItemList data = {data} />
        
        </div>
    )
}

export default ItemListContainer