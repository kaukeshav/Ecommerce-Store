import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, Shoppage } from './pages';
import './App.css';

function App() {
  return (
    <div className="e-commerce-app">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
