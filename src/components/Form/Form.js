import React, { useContext, useState, useEffect } from "react";

//FIREBASE
import { db } from '../../firebase'

//COMPONENTS
import { CartContext } from "../CartContext/CartContext";

const Form = () => {
    const { carrito, quitarTodo } = useContext(CartContext)

    // const [buyer, setBuyer] = useState({})

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
        const buyer = {
            name: name,
            phone: phone,
            email: mail,
            item: carrito,
        };
        await db.collection('compras').doc().set(buyer);

        const docs = [];
        db.collection('compras').onSnapshot( (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            alert(`Tu orden de compra es ${docs.pop().id}`)
        })
    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        buyOrder()
        quitarTodo()
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