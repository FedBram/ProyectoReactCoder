// import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';

//FIREBASE
import { db } from '../../firebase'
// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
// import { db } from '../../firebase';

//COMPONENTS
// import { CartContext } from '../CartContext/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = (() => {

    const [dataDetail, setDataDetail] = useState([])
    const [loaded, setLoaded] = useState(false)

    // const {newStock} = useContext(CartContext)

    const {itemId} = useParams()

    const getProducts =  () => {
        const docs = [];
        db.collection('vinyls').onSnapshot( (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setDataDetail(docs.find( e => e.id === itemId))
        })
    //     const docs = [];
    //     const q = query(collection(db, "vinyls"));
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     docs.push({...doc.data(), id: doc.id})        
    //     });
    //     setDataDetail(docs.find( e => e.id === itemId))
    }  

    useEffect(() => {

        // getProducts()
        setTimeout(() => {
            getProducts()
            setLoaded(true)
            // axios(
            //     'https://mocki.io/v1/0dd5338e-ea01-479c-b036-ee7a8307d9e7'
            //     ).then((res) => setDataDetail(res.data.find( e => e.id === itemId)))
            //     .finally(setLoaded(true))
        }, 2000)
    }, [itemId])
    

    const setNewStock = ( async (item, quantityToAdd,id) => {
       const newStock = {...item, cartStock: item.cartStock - quantityToAdd}
       await db.collection('vinyls').doc(id).set(newStock);
    })

    return (
        <div>
            {loaded ? 
                <ItemDetail dataDetail = {dataDetail} setNewStock = {setNewStock} /> 
                : 
                <Spinner />}
                {/* <ItemDetail dataDetail = {dataDetail} />  */}
        </div>
    )
})




export default ItemDetailContainer