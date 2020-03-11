import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, Shoppage, SignInAndSignUp } from './pages';
import { Header } from './components';
import { auth, createUserProfile } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      createUserProfile(user); // adding a new user if doesn't exists in DB
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="e-commerce-app">
        <Router>
          {/*  Common component across various routes */}
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shoppage} />
            <Route exact path="/sign-in" component={SignInAndSignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
