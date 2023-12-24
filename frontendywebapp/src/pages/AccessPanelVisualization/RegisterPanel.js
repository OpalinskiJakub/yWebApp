import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button, Card, Col, Form } from "react-bootstrap";

class RegisterPanel extends Component {
    constructor() {
        super();
        this.state = {
            validateAlert: false,
            formData: {
                email: '',
                username: '',
                description: '',
                age: '',
                password: ''
            }
        };
    }

    render() {
        return (
            <Col md={{ span: 4, offset: 1 } }>
                <Card style={{ padding: '7%' }}>
                    {true ? (
                        <Alert
                            variant="danger"
                            onClose={() => this.setState({ validateAlert: false })}
                            dismissible
                            style={{ fontSize: 'smaller' }}
                        >
                            Niepoprawne dane
                        </Alert>
                    ) : null}

                    <Form>
                        <Form.Group controlId="formName" style={{ padding: '4%' }}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name="username"
                                value={this.state.formData.username}
                                onChange={(e) => this.setState({ formData: { ...this.state.formData, username: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" style={{ padding: '4%' }}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={this.state.formData.password}
                                onChange={(e) => this.setState({ formData: { ...this.state.formData, password: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formDescription" style={{ padding: '4%' }}>
                            <Form.Label>Opis</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                required
                                placeholder="Enter your description"
                                name="description"
                                value={this.state.formData.description}
                                onChange={(e) => this.setState({ formData: { ...this.state.formData, description: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName" style={{ padding: '4%' }}>
                            <Form.Label>Wiek</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name="username"
                                value={this.state.formData.username}
                                onChange={(e) => this.setState({ formData: { ...this.state.formData, username: e.target.value } })}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName" style={{ padding: '4%' }}>
                            <Form.Label>Haslo</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name="username"
                                value={this.state.formData.username}
                                onChange={(e) => this.setState({ formData: { ...this.state.formData, username: e.target.value } })}
                            />
                        </Form.Group>

                        <Button variant="outline-primary" >Zarejstruj sie</Button>
                    </Form>
                </Card>
            </Col>
        );
    }
}

export default RegisterPanel;
