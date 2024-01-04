import React, {Component} from "react";
import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import {Link, NavLink, Outlet} from "react-router-dom";
import Container from "react-bootstrap/Container";
class LogoPanel extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <Container fluid>

                <Row className="justify-content-center" className="mt-5" style={{paddingLeft:'10%',paddingRight:'10%',paddingBottom:'10%'}}>
                    <Card   className="mt-5" className="bg-body-tertiary" data-bs-theme="dark" >
                        <Row style={{paddingBottom:'12%',paddingTop:'10%'}} >
                            <Col md={{ span: 4, offset: 1 }} className="mt-5">
                                <NavLink to="/access" style={{ textDecoration: 'none' }}>
                                    <Badge variant="dark" style={{ maxWidth: '150%', maxHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <h1 style={{ color: 'black', fontFamily: 'sans-serif', margin: '0', fontSize: '18rem' }}>Y</h1>
                                    </Badge>
                                </NavLink>
                            </Col>

                            <Outlet/>

                        </Row>
                    </Card>
                </Row>

            </Container>

        )
    }

}
export default LogoPanel;