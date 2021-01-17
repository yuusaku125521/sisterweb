import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Profile from './components/pages/Profile';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/global';
import { theme } from './theme';
import { Burger, Menu } from './ham_components';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>   <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        
      </>
    </ThemeProvider>
  );
}


export default App;
