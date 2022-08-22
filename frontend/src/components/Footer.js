import React from 'react';
import './bootstrap/css/bootstrap.min.css';


const Footer = () => {
    return (
        <footer className='footer-copyright fixed-bottom text-center bg-dark py-3'>
            &copy; {new Date().getFullYear()} Copyright
        </footer>
    )
}


export default Footer;