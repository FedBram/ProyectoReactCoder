import React, {useState, createContext, useEffect} from 'react';
//FIREBASE
import { db } from '../../firebase'

export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(
        JSON.parse(localStorage.getItem('carrito')) != null ? 
        JSON.parse(localStorage.getItem('carrito')) 
        : [] );

    //ALMACENA CONTENIDO DEL CARRITO EN LOCALSTORAGE

    useEffect(() => {         
        localStorage.setItem('carrito',JSON.stringify(carrito))  
    }, [carrito])

    //VERIFICA SI EL ITEM YA SE ENCUENTRA EN EL CARRITO

    const isInCart = (id) => carrito.some((i) => i.id === id);

    //FUNCION PARA AGREGAR ITEM AL CARRITO

    const agregarCarrito = ((item, quantity, precioT, stock) => {
        if(isInCart(item.id)){
            const carritoRefresh = carrito.map((e) => {
                if(e.id === item.id) {
                    return {...e, quantity: e.quantity + quantity, precioT: Number((precioT * quantity) + e.precioT), cartStock: Number(item.cartStock - quantity)};
                }else {return e};
            });
            setCarrito(carritoRefresh);
        }else {
            setCarrito( (prev) => [...prev, {...item, quantity, precioT: Number(precioT * quantity), cartStock: Number(stock - quantity)}]);
        }
    });

    
    //ELIMINAR UN ITEM DEL CARRITO

    const quitarItem = (async (item, id) => {
        setCarrito(carrito.filter((e) => e.id !== id));
        const resetStock = {
            artista: item.artista, 
            cartStock: item.stock, 
            cat: item.cat, 
            img: item.img, 
            ladoB: item.ladoB, 
            precio: item.precio, 
            stock:item.stock, 
            titulo:item.titulo, 
            tracksA: item.tracksA};

        await db.collection('vinyls').doc(id).set(resetStock);
    })

    //LIMPIAR CARRITO

    const quitarTodo = (() => {
        setCarrito([]);
        carrito.map( async (item) => {
            const resetStocks = {
                artista: item.artista, 
                cartStock: item.stock, 
                cat: item.cat, 
                img: item.img, 
                ladoB: item.ladoB, 
                precio: item.precio, 
                stock:item.stock, 
                titulo:item.titulo, 
                tracksA: item.tracksA}

            await db.collection('vinyls').doc(item.id).set(resetStocks);   
        })     
    })

    //LIMPIAR CARRITO DESPUES DE REALIZAR COMPRA

    const finalClean = () => setCarrito([]);

    //CANTIDAD TOTAL EN CARRITO

    const totalQuantity = carrito.reduce((acc,i) => {
        return acc + i.quantity;
    }, 0)

    //PRECIO TOTAL

    const totalPrice = carrito.reduce((acc,i) => {
        return acc + Number(i.precioT);
    }, 0)
    

    return (
        <CartContext.Provider value = {{carrito, agregarCarrito, quitarTodo, quitarItem, totalQuantity, totalPrice, finalClean}}>
            {children}
        </CartContext.Provider>
    )
}           