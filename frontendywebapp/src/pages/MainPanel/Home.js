import { Outlet, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import {Badge,Button,Dropdown,Form,Offcanvas} from "react-bootstrap";
import React, {Component} from "react";
import UserPanel from "../UserPanelVisualization/UserPanel";


class Home extends Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div data-bs-theme="dark" sticky="top">
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
                        <Container fluid>
                            <Navbar.Brand href="/home">
                                <Badge variant="dark" style={{width:"50px", height:"37px"}}>
                                    <h4 style={{ color: "black", fontFamily: "sans-serif" }}>Y</h4>
                                </Badge>
                            </Navbar.Brand>
                            <div style={{width:"50%"}}>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Wyszukaj"
                                        className="me-2"
                                        aria-label="Wyszukaj"
                                    />
                                    <Button variant="outline-primary">Search</Button>
                                </Form>
                            </div>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                                data-bs-theme="dark"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Panel użytkownika
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body data-bs-theme="dark">
                                    <Nav className="justify-content-end flex-grow-1 pe-3" data-bs-theme="dark">
                                        <Nav.Link href="/home/UserPanel">Dane użytkownika</Nav.Link>
                                        <Nav.Link href="/home/post">Twoje posty</Nav.Link>
                                        <Nav.Link href="/home/AdminPanel">Panel administratora</Nav.Link>
                                        <Nav.Link href="/home/AdminPanel">Wyloguj sie</Nav.Link>
                                        <NavDropdown
                                            title="Wybierz język"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">
                                                Angielski
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Polski
                                            </NavDropdown.Item>

                                        </NavDropdown>
                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>

                ))}
                <Outlet />
            </div>
        );
    }


}

export default Home;


