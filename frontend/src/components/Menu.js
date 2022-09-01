import React from "react";
import { Link } from "react-router-dom";

import './bootstrap/css/bootstrap.min.css';


function NavbarItem({name, href}) {
    return (
        <Link className="nav-link" to={href}>{name}</Link>
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

function Navbar({navbarItems, username, token, logout}) {
    let login_button = ''
    if (token !== '') {
        login_button = <div  style={{'position': 'absolute', 'right': '0'}}><span>Добро пожаловать {username} </span><button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Logout</button></div>
    }
    else {
      login_button = <Link  style={{'position': 'absolute', 'right': '0'}} to='/login' className="btn btn-outline-success my-2 my-sm-0">Login</Link>
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{'backgroundColor': '#78d2eb'}}>
            <span className="navbar-brand" href="#">ToDo</span>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href}/>)}
                  {login_button}
                </ul>

            </div>
        </nav>
    )
}


export default Navbar