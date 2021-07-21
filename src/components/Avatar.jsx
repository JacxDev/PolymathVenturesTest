import React from 'react';
import './avatar.css'

const Avatar = ({ img, name }) => {
    return (
        <div className="avatar">
            <h4> { name } </h4>
            <img src={ img } alt="" />
        </div>
    )
}

export default Avatar
