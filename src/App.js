//library
import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
//styles
import './App.css';
//components
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignPage from './components/pages/signpage/signpage.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

const EffectsPage = () =>(
	<div>
		<h1>EFFECTS PAGE </h1>
	</div>
);

class App extends Component {
  constructor(){
    super();
    this.state={
        currentUser:null,
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
      	<Switch>
      		<Route exact path="/" component={HomePage}/>
      		<Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignPage} />
      	</Switch>
      </div>
    );
  }
}

export default App;
