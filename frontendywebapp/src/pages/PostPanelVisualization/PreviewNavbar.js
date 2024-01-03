import UnsecuredTokenStorageSystem from "../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Badge, Button, Form, Offcanvas} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link, Outlet} from "react-router-dom";
import React, {Component} from "react";

class PreviewNavbar extends Component{
    constructor() {
        super();
        this.tokenStorage = new UnsecuredTokenStorageSystem();

    }




    render() {
        return (
            <div data-bs-theme="dark" sticky="top">

                    <Navbar className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
                        <Container fluid>
                            <Navbar.Brand href="/access">
                                <Badge variant="dark" style={{width:"50px", height:"37px"}}>
                                    <h4 style={{ color: "black", fontFamily: "sans-serif" }}>Y</h4>
                                </Badge>
                            </Navbar.Brand>

                        </Container>
                    </Navbar>


                <Outlet />
            </div>
        );
    }
}

export default PreviewNavbar;