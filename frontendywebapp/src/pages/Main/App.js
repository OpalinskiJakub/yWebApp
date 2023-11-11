import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Home from "./Home";
import {Outlet} from "react-router-dom";
function App() {
    return (
        <Container fluid className="bg-secondary vh-100 vw-100 d-flex flex-column px-0">
            <Home className="w-100" />
            <Outlet />
        </Container>
    );
}

export default App;
