//library
import React from 'react';
import {Route,Switch} from 'react-router-dom';
//styles
import './App.css';
//components
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';

const EffectsPage = () =>(
	<div>
		<h1>EFFECTS PAGE </h1>
	</div>
);

function App() {
  return (
    <div>
      <Header/>
    	<Switch>
    		<Route exact path="/" component={HomePage}/>
    		<Route path="/shop" component={ShopPage} />
    	</Switch>
    </div>
  );
}

export default App;
