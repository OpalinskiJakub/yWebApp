import React, {Component} from "react";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import LoginPanel from "./LoginPanel";


class AccessPanel extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <Col md={{ span: 3, offset: 2 }} style={{paddingTop:'10%'}}>
            <Card style={{padding:'16%'}}>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/LoginPanel">
                    Zaloguj się
                </Button>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/registerPanel">
                    Zarejstruj sie
                </Button>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/home">
                    Przejdz do Y
                </Button>
            </Card>
                </Col>
        )
    }
}
export default AccessPanel;