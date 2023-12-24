import React, {Component} from "react";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class RegisterTypePanel extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <Col md={{ span: 3, offset: 2 }} style={{marginTop:'10%'}}>
                <Card style={{padding:'16%'}}>
                    <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/registerPanel">
                        Wpisz dane
                    </Button>
                    <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/registerPanel">
                        Poprzez Github
                    </Button>
                </Card>
            </Col>
        )
    }
}

export default RegisterTypePanel;