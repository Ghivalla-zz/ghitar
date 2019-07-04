import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import './App.css';
import {Route,Switch} from 'react-router-dom';
const PedalsPage = () =>(
	<div>
		<h1>PEDALS PAGE </h1>
	</div>
);

function App() {
  return (
    <div>
    	<Switch>
    		<Route exact path="/" component={HomePage}/>
    		<Route path="/pedals" component={PedalsPage} />
    	</Switch>
    </div>
  );
}

export default App;
