import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, Shoppage, SignInAndSignUp } from './pages';
import { Header } from './components';
import './App.css';

function App() {
  return (
    <div className="e-commerce-app">
      <Router>
        {/*  Common component across various routes */}
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/sign-in" component={SignInAndSignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
