import React from "react";
import './Button.css'

function Button(props) {
    return (
        <button className='btn' onClick={() => props.changeVisible()}>
            <div className='btn__img'></div>
            Add card
        </button>
    )
}

export default Button