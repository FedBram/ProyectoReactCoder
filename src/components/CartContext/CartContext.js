import React, {useState, createContext, useEffect} from 'react';

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

    const agregarCarrito = ((item, quantity, precioT) => {
        if(isInCart(item.id)){
            const carritoRefresh = carrito.map((e) => {
                if(e.id === item.id) {
                    return {...e, quantity: e.quantity + quantity, precioT: Number((precioT * quantity) + e.precioT)};
                }else {return e};
            });
            setCarrito(carritoRefresh);
        }else {
            setCarrito( (prev) => [...prev, {...item, quantity, precioT: Number(precioT * quantity)}]);
        }
    });

    
    //ELIMINAR UN ITEM DEL CARRITO

    const quitarItem = (id) =>{
        setCarrito(carrito.filter((e) => e.id !== id))
   }

    //LIMPIAR CARRITO

    const quitarTodo = () => setCarrito([]);

    //CANTIDAD TOTAL EN CARRITO

    const totalQuantity = carrito.reduce((acc,i) => {
        return acc + i.quantity;
    }, 0)

    //PRECIO TOTAL

    const totalPrice = carrito.reduce((acc,i) => {
        return acc + Number(i.precioT);
    }, 0)
    

    

    return (
        <CartContext.Provider value = {{carrito, agregarCarrito, quitarTodo, quitarItem, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}           