import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import {Card,Col} from "react-bootstrap";
class RegisterPanel extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        };
    }

    setShow() {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <Col md={{ span: 3, offset: 2 }} style={{paddingTop:'5%'}}>
                <Card style={{padding:'6%'}}>
                {
                    this.state.show ? (
                        <Alert variant="danger" onClose={() => this.setShow()} dismissible>
                            Niepoprawne dane
                        </Alert>
                    ) : null
                }
                </Card>
            </Col>
        );
    }
}

export default RegisterPanel;
