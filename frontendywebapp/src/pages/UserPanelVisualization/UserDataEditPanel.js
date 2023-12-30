import React, {Component} from "react";
import {Button, Card, Form,Nav,ListGroup ,Col,Image,Container,Row,InputGroup,Accordion} from "react-bootstrap";
import SessionUserStorageSystem from "../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import RegisterAutorization from "../Authorisation/UserAuthorisation/RegisterService";
import UserDataService from "../Authorisation/UserAuthorisation/userDataService";
import Alert from "react-bootstrap/Alert";
import {Link, Navigate} from "react-router-dom";
class UserDataEditPanel extends Component{
    constructor() {
        super();
        this.state = {
            acceptUserDescribe:false,
            errorUserDescribe:false,
            acceptUserUsername:false,
            errorUserUsername:false,
            errorEmailUsername:false,
            redirect:false,
            formData: {
                email: '',
                username: '',
                description: '',
            }
        };
        this.userDataService = UserDataService.getInstance();
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

    changeEmail = async () => {
        let response = await this.userDataService.validateEmail(this.state.formData.email);

        if(response===true){
            this.setState({
                errorEmailUsername:false,
                redirect:true,
            })
        }else {
            this.setState({
                errorEmailUsername:true,
                redirect:false,
            })
        }
    }

    changeUsername = async () => {
        let response = await this.userDataService.validateAndSendUsername(this.state.formData.username);
        if(response===true){
            this.setState({
                acceptUserUsername:true,
                errorUserUsername:false,
            })
        }else {
            this.setState({
                acceptUserUsername:false,
                errorUserUsername:true,
            })
        }
    }

    changeDescribe = async () => {
        let response = await this.userDataService.validateAndSendDescription(this.state.formData.description);
        if(response===true){
            this.setState({
                acceptUserDescribe:true,
                errorUserDescribe:false,
            })
        }else {
            this.setState({
                acceptUserDescribe:false,
                errorUserDescribe:true,
            })
        }
    }

    render() {
        return(
            <Container>
                <Row>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Email</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {this.state.errorEmailUsername? (
                                    <Alert
                                        variant="danger"
                                        onClose={() => this.setState({ acceptedEmailChangeAlert: false })}
                                        dismissible
                                        style={{ fontSize: 'smaller' }}
                                    >
                                        Niepoprawne dane lub konto z podanymi danymi juz istnieje
                                    </Alert>
                                ) : null}

                                {this.state.redirect ? <Navigate to="/access" replace={true} />  : null}
                                <Form.Group controlId="formEmail" style={{ padding: '1%' }}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={this.state.formData.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <Button variant="outline-primary" id="button-addon2"
                                    onClick={this.changeEmail} style={{ marginTop: '2%' }}s>
                                    Button
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Nazwa uzytkownika</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {this.state.errorUserUsername ? (
                                    <Alert
                                        variant="danger"
                                        onClose={() => this.setState({ errorUserUsername: false })}
                                        dismissible
                                        style={{ fontSize: 'smaller' }}
                                    >
                                        Niepoprawne dane lub konto z podanymi danymi juz istnieje
                                    </Alert>
                                ) : null}

                                {this.state.acceptUserUsername ? (

                                    <Alert
                                        variant="success"
                                        onClose={() => this.setState({ acceptUserUsername: false })}
                                        dismissible
                                        style={{ fontSize: 'smaller' }}
                                    >
                                        <Container>
                                            Zmieniono
                                        </Container>
                                    </Alert>

                                ) : null}
                                <Form.Group controlId="formEmail" style={{ padding: '1%' }}>
                                    <Form.Label>Nazwa uzytkownika</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter your username"
                                        name="username"
                                        value={this.state.formData.username}
                                        onChange={this.handleInputChange}
                                    />
                                    <Button variant="outline-primary" id="button-addon2"
                                    onClick={this.changeUsername} style={{ marginTop: '2%' }}>
                                        Button
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Opis</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {this.state.errorUserDescribe ? (
                                    <Alert
                                        variant="danger"
                                        onClose={() => this.setState({ errorUserDescribe: false })}
                                        dismissible
                                        style={{ fontSize: 'smaller' }}
                                    >
                                        Niepoprawne dane lub konto z podanymi danymi juz istnieje
                                    </Alert>
                                ) : null}

                                {this.state.acceptUserDescribe? (

                                    <Alert
                                        variant="success"
                                        onClose={() => this.setState({ acceptUserDescribe: false })}
                                        dismissible
                                        style={{ fontSize: 'smaller' }}
                                    >
                                        <Container>
                                            Zmieniono
                                        </Container>
                                    </Alert>

                                ) : null}
                            <Form.Group controlId="formDescription" style={{ padding: '1%' }}>
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
                                <Button variant="outline-primary" id="button-addon2"
                                        onClick={this.changeDescribe}
                                        style={{ marginTop: '2%' }}>
                                    Button
                                </Button>

                            </Form.Group>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                </Row>



            </Container>
        )
    }


}

export default UserDataEditPanel;