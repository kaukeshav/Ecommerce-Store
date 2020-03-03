import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div className="hats-page">
      <h1>Hi! from the hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="e-commerce-app">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
