import React, {Component} from "react";
import {Card, Col, Form} from "react-bootstrap";

class AppealForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Col md={{span: 3, offset: 2}} style={{marginTop: '6%'}}>
                <Card style={{padding: '7%'}}>
                    <Form>
                        <Form.Group controlId="formName" style={{padding: '4%'}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name="username"


                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" style={{padding: '4%'}}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="password"


                            />
                        </Form.Group>

                        <Form.Group controlId="formDescription" style={{padding: '4%'}}>
                            <Form.Label>Opis</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                required
                                placeholder="Enter your description"
                                name="description"
                            />
                        </Form.Group>
                    </Form>
                </Card>
            </Col>
            )
    }

}

export default AppealForm;