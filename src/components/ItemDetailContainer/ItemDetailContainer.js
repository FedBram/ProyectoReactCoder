<<<<<<< HEAD
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

//COMPONENTS
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = (() => {

    const [dataDetail, setDataDetail] = useState([])
    const [loaded, setLoaded] = useState(false)

    const {itemId} = useParams()


    useEffect(() => {
        setTimeout(() => {
            axios(
                'https://mocki.io/v1/0dd5338e-ea01-479c-b036-ee7a8307d9e7'
                ).then((res) => setDataDetail(res.data.find( e => e.id === itemId)))
                .finally(setLoaded(true))
        }, 2000)
    }, [itemId])
    
    return (
        <div>
            {loaded ? 
                <ItemDetail dataDetail = {dataDetail} /> 
                : 
                <Spinner />}
        </div>
    )
})




=======
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

//COMPONENTS
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = (() => {

    const [dataDetail, setDataDetail] = useState([])
    const [loaded, setLoaded] = useState(false)

    const {itemId} = useParams()


    useEffect(() => {
        setTimeout(() => {
            axios(
                'https://mocki.io/v1/0dd5338e-ea01-479c-b036-ee7a8307d9e7'
                ).then((res) => setDataDetail(res.data.find( e => e.id === itemId)))
                .finally(setLoaded(true))
        }, 2000)
    }, [itemId])
    
    return (
        <div>
            {loaded ? 
                <ItemDetail dataDetail = {dataDetail} /> 
                : 
                <Spinner />}
        </div>
    )
})




>>>>>>> c56e865766192ede4de5dcd15a5176cbcfb8c715
export default ItemDetailContainer