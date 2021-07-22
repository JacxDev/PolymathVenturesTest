import React, { useState, useEffect } from 'react'
import Avatar from '../components/Avatar';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom'

const Main = () => {
    const [ urlAvatar, setUrlAvatar ] = useState("");
    const [ name, setName ] = useState("");

    const token = process.env.REACT_APP_APIKEY;
    const uri = `https://superheroapi.com/api/${token}`

    const { loading, data } = useFetch(uri, 10);

    const handleHover = (e) => {
        setUrlAvatar(e.target.src);
        setName(e.target.alt);
        e.target.className = "item-selected"
         
        const removeElement = e.target.parentElement.parentElement.firstChild;
        if(removeElement.tagName == "P"){
            removeElement.remove()
        }
        
        

    }
    const handleClick = (e) => {    
        e.preventDefault();
        console.log(e)
    }

    //Implementar local storage para mejorar performace
    // useEffect(() => {
    //     localStorage.setItem('data', JSON.stringify(data))
    // }, [data])
    // const dataStorege = JSON.parse(localStorage.getItem('data'));

    if(loading) return <p>Loading...</p>

    return (
        <div className="container">
            <div className="element-container">
                <div className="grid-items">
                {
                    data.map((e) => {
                    return(
                        <div key={e.id} className="item"  onClick={ handleClick } >  
                            <p className="new-label">New</p>
                            <Link to={{
                                pathname: "/character",
                                state: {
                                    character: e
                                }
                            }}>
                                <img alt={ e.name }  onMouseEnter={handleHover} src={ e.image.url } /> 
                                
                            </Link>
                        </div>
                    )
                    })
                }
                </div>
                <div className="avatar-container">
                    <Avatar img={ urlAvatar } name={ name } />
                </div> 
            </div>
        </div>
    );
}

export default Main
