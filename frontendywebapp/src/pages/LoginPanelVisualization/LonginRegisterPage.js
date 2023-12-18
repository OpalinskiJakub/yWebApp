import React, {Component} from "react";
import {Badge, Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
class LonginRegisterPage extends Component{
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
                                <Badge variant="dark" style={{ maxwidth: '150%', maxHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <h1 style={{ color: 'black', fontFamily: 'sans-serif', margin: '0', fontSize: '18rem'  }}>Y</h1>
                                </Badge>
                            </Col>

                            <Col md={{ span: 3, offset: 2 }} className="mt-5" style={{paddingTop:'10%'}}>
                                <Card style={{padding:'10%'}}>

                                    <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/home">
                                        Zaloguj się
                                    </Button>
                                    <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/home">
                                        Zarejstruj sie
                                    </Button>
                                    <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/home">
                                        Przejdz do Y
                                    </Button>


                                </Card>
                            </Col>

                        </Row>
                    </Card>
                </Row>

            </Container>

        )
    }

}
export default LonginRegisterPage;