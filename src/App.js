import React from 'react';
import "./App.css"

import {Switch,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import CART from "./components/Cart"
import Details from "./components/Details"
import Footer from "./components/Footer"

import ProductList from "./components/ProductList"
import Default from "./components/Default"
import Modal from "./components/Modal"
import Profile from './components/Profile';




function App() {
  return (
    
    <React.Fragment>
    
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}  />
        <Route path="/details" component={Details}  />
        <Route path="/cart" component={CART}  />
        <Route path="/profile" component={Profile}  />
        
        <Route component={Default}  />
      </Switch>
      <Footer/>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
