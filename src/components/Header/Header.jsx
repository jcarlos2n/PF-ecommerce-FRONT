import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import "./Header.scss";
import axios from "axios";

const Header = () => {
    const dispatch = useDispatch();
    const dataUser = useSelector(userData);
    const [user, setUser] = useState();

    const data = {
        headers: {"Authorization": `Bearer ${dataUser.token}`}
    }

    async function fetchUser(){
        await axios.get("http://localhost:8000/api/profile", data)
        .then(resp => {
            setUser(resp.data);
            console.log(resp.data)
        }).catch(error => {});
    }

    // if (dataUser.token) {
        
    // }

    if (!dataUser?.token) {
        return (
            <Navbar collapseOnSelect className="headerWall text-white m-0 p-0" expand="md" variant="dark">
                <Container fluid className="black">
                    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="py-0 px-0 my-0 mx-3" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="text-white mx-2">Home</Nav.Link>
                            <Nav.Link as={Link} to="films" className="text-white mx-2">Products</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" className="text-white mx-2">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/signup" className="text-white mx-2" >Sign Up</Nav.Link>
                            <Nav.Link as={Link} to="/login" className="text-white mx-2" >Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }else{    
        fetchUser();
        return (
            <Navbar collapseOnSelect className="headerWall text-white m-0 p-0" expand="md" variant="dark">
                <Container fluid className="black">
                    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="py-0 px-0 my-0 mx-3" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="text-white mx-2">Home</Nav.Link>
                            <Nav.Link as={Link} to="films" className="text-white mx-2">Products</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" className="text-white mx-2">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/profile" className="text-white mx-2" >{user.name}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

    


}

export default Header;