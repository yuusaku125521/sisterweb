import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Base from "./components/pages/Base";
import Home from "./components/pages/Home";
import Profile from './components/pages/Profile';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Base} />
          <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
  );
}


export default App;
