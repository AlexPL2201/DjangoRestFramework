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
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href}/>)}
                </ul>
                {/*<form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>*/}
            </div>
        </nav>
    )
=======
>>>>>>> parent of d9a061b (Lesson-5)
}


export default Menu