import React from 'react';
import './item.css'

const Item = ({ img }) => {
    return (
        <div className="item"> 
            <img src={ img } alt="" />
        </div>
    )
}

export default Item
