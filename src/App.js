import React, { useState } from 'react'
import './App.css';
import Avatar from './components/Avatar';
import useFetch from './hooks/useFetch';

function App() {

  const [ urlAvatar, setUrlAvatar ] = useState("");
  const [ name, setName ] = useState("")

  const token = process.env.REACT_APP_APIKEY;
  const uri = `https://superheroapi.com/api/${token}`

  const { loading, error, data } = useFetch(uri, 32);

  const handleHover = (e) => {
    setUrlAvatar(e.target.src);
    setName(e.target.alt);
  }

  if(loading) return <p>Loading...</p>

  return (
    <div className="container">
        <div className="element-container">
            <div className="grid-items">
              {
                data.map((e) => {
                  return(
                    <div className="item"  >  
                      <img alt={ e.name }  onMouseEnter={handleHover} src={ e.image.url } /> 
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

export default App;
