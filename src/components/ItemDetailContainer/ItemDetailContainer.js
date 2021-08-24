import axios from 'axios';
import React, {useState, useEffect} from 'react';

//COMPONENTS
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = (() => {

    const [dataDetail, setDataDetail] = useState({})

    useEffect(() => {
        setTimeout(() => {
            axios(
                    'http://myjson.dit.upm.es/api/bins/7xr'
                ).then((res) => setDataDetail(res.data))
        }, 2000)
    }, [])

    return (
        <div>
            <ItemDetail 
                dataDetail = {dataDetail}
            />
        </div>
    )
})




export default ItemDetailContainer