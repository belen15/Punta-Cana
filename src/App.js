import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contacto from './components/contacto';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>  
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
