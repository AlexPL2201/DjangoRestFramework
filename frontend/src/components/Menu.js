import React from "react";
import { Link } from "react-router-dom";

import './bootstrap/css/bootstrap.min.css';


function NavbarItem({name, href}) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={href}>{name}</Link>
        </li>
    )
}

/*const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <span className="navbar-brand">Menu</span>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/userList">Список пользователей</a>
                    <a className="nav-item nav-link" href="#">Список проектов</a>
                    <a className="nav-item nav-link" href="#">Список to do</a>
                </div>
            </div>
        </nav>
    )
}*/

function Navbar({navbarItems}) {
    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{'backgroundColor': '#78d2eb'}}>
            <span className="navbar-brand" href="#">ToDo</span>
            <div className="collapse navbar-collapse" id="navbarCollapse" style={{'position': 'absolute', 'right': '0'}}>
                <ul className="navbar-nav mr-auto">
                  {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href}/>)}
                </ul>
            </div>
        </nav>
    )
}


export default Navbar