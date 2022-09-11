import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { profileUser, userData } from "../../containers/User/userSlice";
import "./Header.scss";

const Header = () => {
    const dispatch = useDispatch();
    const dataUser = useSelector(userData);

    useEffect(() => {
        dispatch(profileUser(dataUser.token))

    }, [dataUser.token])


    if (!dataUser?.token) {
        return (
            <Navbar collapseOnSelect className="headerWall text-white m-0 p-0" expand="md" variant="dark">
                <Container fluid className="black">
                    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="py-0 px-0 my-0 mx-3" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="text-white mx-2">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/products" className="text-white mx-2">Productos</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" className="text-white mx-2">Sobre nosotros</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/signup" className="text-white mx-2" >¿Eres nuevo?</Nav.Link>
                            <Nav.Link as={Link} to="/login" className="text-white mx-2" >Identificarse</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        return (

            <Navbar collapseOnSelect className="headerWall text-white m-0 p-0" expand="md" variant="dark">
                <Container fluid className="black">
                    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="py-0 px-0 my-0 mx-3" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="text-white mx-2">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/products" className="text-white mx-2">Productos</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" className="text-white mx-2">Sobre nosotros</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Mi Carrito" className="text-white">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/profile" className="text-white mx-2" >{dataUser.name}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;