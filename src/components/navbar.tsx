import React, {FC} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';


const NavBar: FC = () => {
    return(
        <Navbar sticky ='top' expand='lg'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                    <Link to='/'>Home</Link> | {" "}
                    <Link to='/about'>About</Link> | {" "}
                    <Link to='/projects'>Projects</Link> | {" "}
                    <Link to='/contact'>Contact</Link> | {" "}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
};

export default NavBar;