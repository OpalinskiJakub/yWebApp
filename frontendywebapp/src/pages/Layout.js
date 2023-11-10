import { Outlet, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './Layout.css';
import {Badge,Button,Dropdown} from "react-bootstrap";
import React from "react";


function Layout() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className="logoStyle">
                    <div >
                        <Badge bg="secondary">
                            Y
                        </Badge>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Panel użytkownika
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Twoje posty oraz aktywności</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Dane użytkownika</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                </Navbar.Collapse>

            </Container>
            <div className="me-auto">
                <Button variant="secondary">
                    EN
                </Button>
            </div>

        </Navbar>

        <Outlet />

    </div>
  );
}

export default Layout;
