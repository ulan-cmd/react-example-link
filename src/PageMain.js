import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


function PageMian() {
  return (
    <div>
        <li><NavLink to="/index">Main</NavLink></li>
        <li><NavLink to="/page1">Page1</NavLink></li>
        <li><NavLink to="/page2">Page2</NavLink></li>
    </div>
  );
}

export default PageMian;
