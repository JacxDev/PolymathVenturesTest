import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './character.css';


const Character = () => {
    const location = useLocation()
    const { character:{image, name, powerstats:{ combat, intelligence, power, speed } ,appearance:{gender, race}} } = location.state
    
    console.log(location.state)


    return (
        <div className="container-characterInfo">
            <div className="character-info">
                <div className="character-text">
                    <h2>INFO</h2>
                    <h4> { name } </h4>
                    <h4> { `Gender:  ${gender}`} </h4>
                    <h4> { `Race: ${ race }` } </h4>
                    <h2>Stats</h2>
                    <h4>  { `Combat:  ${ combat }` }  </h4>
                    <h4> { `intelligence: ${ intelligence }` } </h4>
                    <h4> { `Power: ${power}` } </h4>
                    <h4> { `Speed ${ speed }` } </h4>

                    <button>
                        <Link to="/">
                            Go Back
                        </Link>
                    </button>
                </div>
                <div className="character-img"> 
                    <img src={ image.url } alt="" />
                </div>
            </div>
        </div>
    )
}

export default Character
