import React, {Component} from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import UserService from "../Authorisation/UserAuthorisation/UserService";
import RegisterAutorization from "../Authorisation/UserAuthorisation/RegisterService";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

class AppealForm extends Component {
    constructor() {
        super();
        this.state = {
            createdAlert: false,
            errorAlert:false,
            formData: {
                email: '',
                content: '',
            }
        };
        this.userService = UserService.getInstance();
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

    sendRevocation = async () => {
        let response = await this.userService.validateAndSendRevocation(this.state.formData);
        console.log(response);
    }


    render() {
        return (
            <Col md={{ span: 4, offset: 1 }} style={{marginTop:'5%'}} >
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
                                    Pomyślnie wyslano
                                </Row>

                            </Container>
                        </Alert>

                    ) : null}



                    <Form>
                        <Form.Group controlId="formEmail" style={{ padding: '4%' }}>
                            <Form.Label>Email</Form.Label>
                            < Form.Control
                                required
                                type="text"
                                placeholder="Enter your email"
                                name="email"
                                value={this.state.formData.email}
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
                                name="content"
                                value={this.state.formData.content}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>


                        <Button
                            variant="outline-primary"
                            onClick={this.sendRevocation}
                        >
                            Wyslij
                        </Button>
                    </Form>
                </Card>
            </Col>
        );
    }

}

export default AppealForm;