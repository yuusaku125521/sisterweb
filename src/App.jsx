import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Base from "./components/Base";
import Home from "./components/Home";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Base} />
          <Route exact path="/home" component={Home} />
        
        </Switch>
      </Router>
  );
}


export default App;
