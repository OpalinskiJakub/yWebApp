import React, {Component} from "react";
import {Button, Card, Col, Form} from "react-bootstrap";

class AppealForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Col md={{span: 4, offset: 1}} style={{marginTop: '2%'}}>
                <Card style={{padding: '10%'}}>
                    <Form>
                        <Form.Group controlId="formName" style={{padding: '3%'}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name="username"


                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" style={{padding: '3%'}}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="password"


                            />
                        </Form.Group>

                        <Form.Group controlId="formDescription" style={{padding: '1%'}}>
                            <Form.Label>Opis</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                required
                                placeholder="Enter your description"
                                name="description"
                            />
                        </Form.Group>
                        <Button variant="outline-primary" onClick={this.validate} style={{marginTop:'3%'}}>
                            Wyslij
                        </Button>
                    </Form>
                </Card>
            </Col>
            )
    }

}

export default AppealForm;