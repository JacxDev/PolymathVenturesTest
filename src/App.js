import './App.css';
import Item from './components/Item';
import useFetch from './hooks/useFetch';

function App() {

  const token = process.env.REACT_APP_APIKEY;
  // const uri = `https://superheroapi.com/api/${token}/1`
  const uri = `https://superheroapi.com/api/1002618803896919/1`

  const { loading, data, error } = useFetch(uri);

  if(!loading)
  if(!error)

  console.log(data)

  return (
    <div className="container">
        <div className="element-container">
            <div className="grid-items">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className="avatar-container">
                element2
            </div>
        </div>
    </div>
  );
}

export default App;
