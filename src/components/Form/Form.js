import React, { useContext, useState } from "react";

//FIREBASE
import { db } from '../../firebase'

//COMPONENTS
import { CartContext } from "../CartContext/CartContext";

const Form = () => {
    const { carrito, finalClean, totalPrice } = useContext(CartContext)

    const items = carrito.map ((e) => {
        const i = {id: e.id, title: e.titulo, price: e.precio}
        return i
    })

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    const handleOnChange = (e) => {
        if (e.target.name === 'name'){
            setName(e.target.value);
        } else if (e.target.name === 'phone') {
            setPhone(e.target.value)
        }else if (e.target.name === 'mail') {
            setMail(e.target.value);
        }
    }

    const buyOrder = async () => {
        const order = {
            buyer: {name: name, phone: phone,  email: mail},
            items: items, total: totalPrice
        };
        await db.collection('compras').doc().set(order);
        console.log(order)
        const docs = [];
        db.collection('compras').onSnapshot( (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })       
        alert(`Tu orden de compra es ${docs.pop().id}`)     
        })
    };

    const setFinalStock = async () => {
        carrito.map( async (item) => {
            const finalStocks = {
                artista: item.artista, 
                cartStock: item.cartStock, 
                cat: item.cat, 
                img: item.img, 
                ladoB: item.ladoB, 
                precio: item.precio, 
                stock:item.cartStock, 
                titulo:item.titulo, 
                tracksA: item.tracksA}

            await db.collection('vinyls').doc(item.id).set(finalStocks);   
        })     
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()
        buyOrder()
        setFinalStock()
        finalClean()
        setName('')
        setPhone('')
        setMail('')
    }

    // useEffect(() => {
    //     getBuyer()
    // }, [])

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor='name'>NOMBRE:</label>
                    <input type='text' name='name' id='name' value={name} onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor='phone'>TELEFONO:</label>
                    <input type='number' name='phone' id='phone' value={phone} onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor='mail'>EMAIL:</label>
                    <input type='email' name='mail' id='mail' value={mail} onChange={handleOnChange}/>
                </div>
                <button type='submit'>COMPRAR</button>
            </form>
        </>
    )

}


export default Form