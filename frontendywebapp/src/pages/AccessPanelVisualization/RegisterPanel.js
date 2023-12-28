import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import RegisterAutorization from "../Autorization/UserAutorization/RegisterAutorization";

class RegisterPanel extends Component {
    constructor() {
        super();
        this.state = {
            createdAlert: false,
            errorAlert:false,
            formData: {
                email: '',
                username: '',
                description: '',
                age: '',
                password: ''
            }
        };
        this.autorization = new RegisterAutorization();
    }


    handleInputChange = (event) => {
        const {name,value} = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            }
        }));
    };

    register = () => {
        let data = {
                email: this.state.email,
                username:this.state.username,
                description:this.state.description,
                age:this.state.age,
                password: this.state.password
        }

        let response = this.autorization.autoarizeRegister(data);
        console.log(response)
        if(response.status===true){
            this.setState({
                createdAlert: true,
                errorAlert:false,
            });
        }else {
            this.setState({
                createdAlert: false,
                errorAlert:true,
            });
        }

    }

    render() {
        return (
            <Col md={{ span: 4, offset: 1 } }>
                <Card style={{ padding: '7%' }}>
                    {this.state.errorAlert ? (
                        <Alert
                            variant="danger"
                            onClose={() => this.setState({ validateAlert: false })}
                            dismissible
                            style={{ fontSize: 'smaller' }}
                        >
                            Niepoprawne dane
                        </Alert>
                    ) : null}

                    {this.state.createdAlert ? (

                        <Alert
                            variant="success"
                            onClose={() => this.setState({ validateAlert: false })}
                            dismissible
                            style={{ fontSize: 'smaller' }}
                        >
                            <Container>
                                <Row>
                                    Pomyślnie zarejestrowano
                                </Row>
                                <Row>
                                    <Button variant="outline-success" style={{marginTop:"3%"}} as={Link} to="/acces">
                                        Przejdz do logowania
                                    </Button>
                                </Row>
                            </Container>
                        </Alert>

                    ) : null}



                    <Form>
                        <Form.Group controlId="formName" style={{ padding: '4%' }}>
                            <Form.Label>Email</Form.Label>
                            < Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name="username"
                                value={this.state.formData.username}
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
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
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Button variant="outline-primary" onClick={this.register}>Zarejstruj sie</Button>
                    </Form>
                </Card>
            </Col>
        );
    }
}

export default RegisterPanel;
