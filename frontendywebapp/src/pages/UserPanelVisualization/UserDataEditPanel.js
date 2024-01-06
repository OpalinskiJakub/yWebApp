import React, {Component} from "react";
import {Button, Card, Form,Nav,ListGroup ,Col,Image,Container,Row,InputGroup,Accordion} from "react-bootstrap";
import UserDataService from "../Authorisation/UserAuthorisation/userDataService";
import Alert from "react-bootstrap/Alert";
import {Link, Navigate} from "react-router-dom";
import {withTranslation} from "react-i18next";
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
        const { t } = this.props;
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
                                        {t('emailForm.errorAlert')}
                                    </Alert>
                                ) : null}

                                {this.state.redirect ? <Navigate to="/access" replace={true} />  : null}
                                <Form.Group controlId="formEmail" style={{ padding: '1%' }}>
                                    <Form.Label>{t('emailForm.title')}</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder={t('emailForm.description')}
                                        name="email"
                                        value={this.state.formData.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <Button variant="outline-primary" id="button-addon2"
                                    onClick={this.changeEmail} style={{ marginTop: '2%' }}s>
                                        {t('emailForm.button')}
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{t('usernameForm.title')}</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {this.state.errorUserUsername ? (
                                    <Alert
                                        variant="danger"
                                        onClose={() => this.setState({ errorUserUsername: false })}
                                        dismissible
                                        style={{ fontSize: 'smaller' }}
                                    >
                                        {t('usernameForm.errorAlert')}
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
                                            {t('usernameForm.acceptAlert')}
                                        </Container>
                                    </Alert>

                                ) : null}
                                <Form.Group controlId="formEmail" style={{ padding: '1%' }}>
                                    <Form.Label>{t('usernameForm.title')}</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder={t('usernameForm.description')}
                                        name="username"
                                        value={this.state.formData.username}
                                        onChange={this.handleInputChange}
                                    />
                                    <Button variant="outline-primary" id="button-addon2"
                                    onClick={this.changeUsername} style={{ marginTop: '2%' }}>
                                        {t('usernameForm.button')}
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>{t('descriptionForm.title')}</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {this.state.errorUserDescribe ? (
                                    <Alert
                                        variant="danger"
                                        onClose={() => this.setState({ errorUserDescribe: false })}
                                        dismissible
                                        style={{ fontSize: 'smaller' }}
                                    >
                                        {t('descriptionForm.button')}
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
                                            {t('descriptionForm.button')}
                                        </Container>
                                    </Alert>

                                ) : null}
                            <Form.Group controlId="formDescription" style={{ padding: '1%' }}>
                                <Form.Label>{t('descriptionForm.title')}</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    required
                                    placeholder={t('descriptionForm.description')}
                                    name="description"
                                    value={this.state.formData.description}
                                    onChange={this.handleInputChange}
                                />
                                <Button variant="outline-primary" id="button-addon2"
                                        onClick={this.changeDescribe}
                                        style={{ marginTop: '2%' }}>
                                    {t('descriptionForm.button')}
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

export default withTranslation('userDataEditPanel')(UserDataEditPanel);