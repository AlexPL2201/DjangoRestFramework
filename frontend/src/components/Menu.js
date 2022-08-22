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
<<<<<<< HEAD
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
=======
>>>>>>> parent of d9a061b (Lesson-5)
}


export default Menu