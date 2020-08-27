import React, { Component } from 'react'
import {Link} from "react-router-dom"
import logo from "../logo.png"

import {ButtonContainer} from "./Button"
import Register from "./Register"
import Logout from "./Logout"

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
    <Link to="/">
        <img src={logo} width="120px" height="80px" alt="store" className="navbar-brand" />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto align-items-center">
<li className="nav-item ml-5" >
<Link to="/" className="nav-link">Apps</Link>
</li>
<li className="nav-item ml-5" >
<Link to="/" className="nav-link">Scripts</Link>
</li>
<li className="nav-item ml-5" >
<Link to="/" className="nav-link">Template</Link>
</li>
    </ul>
   <form className="form-inline my-2 my-lg=0">
   <Link to="/cart" className="ml-auto">
        <ButtonContainer>
        <span className="mr-2 ">
        <i className="fa fa-cart-plus" aria-hidden="true"> my Cart</i>    
        </span>

        </ButtonContainer>
    </Link>
  <Register/>
  <Logout/>

   </form>
    
    </div>
            </nav>
        )
    }
}




