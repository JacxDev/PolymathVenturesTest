import './App.css';
import Item from './components/Item';
import Avatar from './components/Avatar';
import useFetch from './hooks/useFetch';

function App() {

  const token = process.env.REACT_APP_APIKEY;
  // const uri = `https://superheroapi.com/api/${token}/1`
  const uri = `https://superheroapi.com/api/${token}/78`

  const { loading, data, error } = useFetch(uri);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>

  const { image, name } = data;

  return (
    <div className="container">
        <div className="element-container">
            <div className="grid-items">
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
                <Item img={ image.url } />
            </div>
            <div className="avatar-container">
                <Avatar img={ image.url } name={ name } />
            </div>
        </div>
    </div>
  );
}

export default App;
