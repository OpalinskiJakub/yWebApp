import React, { Component } from 'react';
import {Form, Button, Card, Col} from 'react-bootstrap';
import {Outlet} from "react-router-dom";

class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            formData: {
                name: '',
                password: '',
            }
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
                isPasswordValid: true,
        }));
    };

    handlePasswordValidation() {
        const { password } = this.state.formData;


        if (password.length < 8) {
            return (
                <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
                </Form.Control.Feedback>
            );
        } else {
            /
            return null;
        }
    };


    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({ validated: true });
    };

    render() {
        const { validated, formData } = this.state;

        return (
            <Col md={{ span: 3, offset: 2 }} style={{paddingTop:'5%'}}>
                <Card style={{padding:'6%'}}>
            <Form noValidate validated={validated} >
                <Form.Group controlId="formName" style={{padding:'4%'}}>
                    <Form.Label>Nazwa użytkownika</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={this.handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword" style={{padding:'4%'}}>
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={this.handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button onClick={this.handlePasswordValidation()} >Submit</Button>
            </Form>

            </Card>
            </Col>
        );
    }
}


export default LoginPanel;