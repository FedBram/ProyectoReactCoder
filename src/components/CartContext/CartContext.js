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

    console.log("productos en carrito:", carrito);

    //VERIFICA SI EL ITEM YA SE ENCUENTRA EN EL CARRITO

    const isInCart = (id) => carrito.some((i) => i.id === id);

    //FUNCION PARA AGREGAR ITEM AL CARRITO

    const agregarCarrito = ((item, quantity) => {
        if(isInCart(item.id)){
            const carritoRefresh = carrito.map((e) => {
                if(e.id === item.id) {
                    return {...e, quantity: e.quantity + quantity};
                }else {return e};
            });
            setCarrito(carritoRefresh);
        }else {
            setCarrito( (prev) => [...prev, {...item, quantity}]);
        }
    });

    
    //ELIMINAR UN ITEM DEL CARRITO

    const quitarItem = (id) =>{
        setCarrito(carrito.filter((e) => e.id !== id))
   }

    //LIMPIAR CARRITO

    const quitarTodo = () => setCarrito([]);

    return (
        <CartContext.Provider value = {{carrito, agregarCarrito, quitarTodo, quitarItem}}>
            {children}
        </CartContext.Provider>
    )
}           