import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css'


const NavBar: FC = () => {
    return(
        <div className='navbar'>
            <nav className='links'>
                <div><Link to='/'>Home</Link> {" "}</div>
                <div><Link to='/about'>About</Link> {" "}</div>
                <div><Link to='/projects'>Projects</Link> {" "}</div>
                <div><Link to='/contact'>Contact</Link> {" "}</div>
            </nav>
        </div>
    )
    
};

export default NavBar;