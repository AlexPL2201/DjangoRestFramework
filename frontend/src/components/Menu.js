import React from "react";
import './bootstrap/css/bootstrap.min.css';


const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <span className="navbar-brand">Menu</span>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">List of all users</a>
                    <a className="nav-item nav-link" href="#">User</a>
                    <a className="nav-item nav-link" href="#">Login</a>
                    <a className="nav-item nav-link" href="#">etc.</a>
                </div>
            </div>
        </nav>
    )
}


export default Menu