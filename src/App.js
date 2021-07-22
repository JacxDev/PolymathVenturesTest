import React from 'react'
import './App.css';
import Main from './pages/Main';
import Character from './pages/Character';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

function App() {
  return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Main />
				</Route>
				<Route path="/character">
					<Character />
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
