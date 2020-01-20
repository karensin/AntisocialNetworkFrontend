import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CTA from './CTA.js';

class NavLink extends Component {
    render() {
        return (
            <nav>
                <Navbar className="navbar-default" variant="dark">
                    <img
                        src={process.env.PUBLIC_URL + "/img/yay_potato.png"}
                        className="logo"
<<<<<<< HEAD
                        width="28"
                        height="49"
=======
                        width="30"
                        height="50"
>>>>>>> hero section positioning
                        className="d-inline-block align-top"
                        alt="logo" />
                    <Navbar.Brand className="text-success custom">superpotato</Navbar.Brand>
                    <Nav className="navbar-collapse collapse justify-content-end">
<<<<<<< HEAD
                        <Nav.Link className="nav-link" href="#home">about</Nav.Link>
                        <button className="btn btn-primary" type="button">Get early access</button>
=======
                        <Nav.Link className="text-success" href="#home">FAQ</Nav.Link>
                        <Nav.Link className="text-success" > <CTA />  </Nav.Link>
>>>>>>> hero section positioning
                    </Nav>
                </Navbar>
            </nav>
        )
    }

}
export default NavLink;