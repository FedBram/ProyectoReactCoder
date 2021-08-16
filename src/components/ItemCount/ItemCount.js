import React from "react"
import "./ItemCount.scss"



const ItemCount = ({stock}) => {

    const [number, setNumber] = React.useState(0);

    const incremet = () => {
        if (number < stock){
            setNumber(number +1)
        }
    }
    const decrease = () => {
        if (number > 0) {
            setNumber (number -1)
        }
    }


    return(
        <div className = "counter">
            <button className = "counter__btnMore" onClick = {decrease}>-</button>            
            <input className = "counter__input" type = "text" placeholder = {number} readOnly="readOnly"/>
            <button className = "counter__btnLess" onClick = {incremet}>+</button>            
        </div>
    )
}



export default ItemCount