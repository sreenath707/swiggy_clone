import React from 'react';
import './dependencies/bootstrap/bootstrap.min.css';
import './navBarStyle.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


function NavBar(){
    return (
    <nav id="nav_bar" className="container-fluid">
        <div className="row">
        <div  className="col-4">
            <img id="logo" src ="images/swiggy_logo.jpg" alt="logo"></img>
        </div>
        <div id="nav_body" className="col-7">
            <div className ="nav-body-element"><i className="bi bi-search"></i> search</div>
            <div className ="nav-body-element"><i className="bi bi-percent"></i> offers</div>
            <div className ="nav-body-element"><i className="bi bi-info-circle-fill"></i> Help</div>
            <div className ="nav-body-element"><i className="bi bi-file-person"></i> sreenath</div>
            <div className ="nav-body-element"><i className="bi bi-cart-fill"></i> cart</div>
        </div>
        </div>
    </nav>
    );
}

export default NavBar;