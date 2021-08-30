import React, {useState} from 'react';
import "./ItemCount.scss"



const ItemCount = ({stock, initial, onAdd}) => {

    const [number, setNumber] = useState(Number(initial));

    const handleCounter = (e) => {setNumber(e.target.value)}

    const handleClick = () => {onAdd(number)}

    const increase = () => {
        if (number < stock){
            setNumber(number +1 )
        }
    }

    const decrease = () => {
        if (number > 0) {
            setNumber (number -1)
        }
    }


    return(
        <div className = "counter">
            <button className = "counter__btnLess" onClick = {decrease}>-</button>                       
            <input className = "counter__input" type = "text" onChange = {handleCounter} value = {number} readOnly = "readOnly"/>
            <button className = "counter__btnMore" onClick = {increase}>+</button> 
            <button type="submit" className = "counter__btnAdd" onClick = {handleClick}>AGREGAR AL CARRITO</button>        
        </div>
    )
}



export default ItemCount