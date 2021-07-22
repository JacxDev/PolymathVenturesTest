import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './character.css';


const Character = () => {
    const location = useLocation()
    const { character:{image, name} } = location.state
    

    return (
        <div className="container-characterInfo">
            
            <Link to="/">
                Back
            </Link>
            
            <div className="character-info">
                <div className="character-text">
                    <h2>INFO</h2>
                    <h4> { name } </h4>
                </div>
                <div>
                    <img src={ image.url } alt="" />
                </div>
            </div>
        </div>
    )
}

export default Character
