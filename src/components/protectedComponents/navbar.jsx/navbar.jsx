import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from "react-router-dom";

//hooks import
import { useAuthContext } from "../../../hooks/useAuthContext";

const NavBar = () => {
    const {dispatch} = useAuthContext();
    const {student} = useAuthContext();
    const {admin} = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    }

    if(admin){
        return(
            <Navbar className="vw-100" bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Assignment 2 (ex 1)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/allCourses">List All Courses</Nav.Link>
                        <Nav.Link href="/allStudents">List All Students</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>

                <button onClick={() => handleLogout()}>Sign out</button>
            </Container>
        </Navbar>
        )
    }

    if(student){
        return(
            <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">Assignment 2 (ex 1)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/mycourses">My Courses</Nav.Link>
                        <Nav.Link href="/addcourse">Add Course</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>

                <button onClick={() => handleLogout()}>Sign out</button>
            </Container>
        </Navbar>
        )
    }
}

export default NavBar