import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import PageMain from './PageMain';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Route path="/index" component={PageMain}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
