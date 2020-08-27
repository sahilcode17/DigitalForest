import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }
    return (
        <div>
           <div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
  
  
  
  
  <a href="#">Android Apps</a>
  <a href="#">IOS Apps</a>
  <a href="#">Web templates</a>
</div> 
<div id="main">
  <i   id="openbtn" onClick={openNav} className="fa fa-bars" aria-hidden="true"></i>
</div>
        </div>
    )
}
