import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import RegisterAutorization from "../Authorisation/UserAuthorisation/RegisterService";
import {withTranslation} from "react-i18next";

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

    register = async () => {
        let data = {
                email: this.state.formData.email,
                username:this.state.formData.username,
                description:this.state.formData.description,
                age:this.state.formData.age,
                password: this.state.formData.password
        }

        let response = await this.autorization.authoriseRegister(data);
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
        const { t } = this.props;
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
                            {t('errorAlert')}

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
                                    {t('acceptAlert.title')}
                                </Row>
                                <Row>
                                    <Button variant="outline-success" style={{marginTop:"3%"}} as={Link} to="/access/LoginPanel">
                                        {t('acceptAlert.button')}
                                    </Button>
                                </Row>
                            </Container>
                        </Alert>

                    ) : null}



                    <Form>
                        <Form.Group controlId="formEmail" style={{ padding: '4%' }}>
                            <Form.Label>{t('emailForm.title')}</Form.Label>
                            < Form.Control
                                required
                                type="text"
                                placeholder={t('emailForm.description')}
                                name="email"
                                value={this.state.formData.email}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formUsername" style={{ padding: '4%' }}>
                            <Form.Label>{t('usernameForm.title')}</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={t('usernameForm.description')}
                                name="username"
                                value={this.state.formData.username}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formDescription" style={{ padding: '4%' }}>
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
                        </Form.Group>

                        <Form.Group controlId="formAge" style={{ padding: '4%' }}>
                            <Form.Label>{t('ageForm.title')}</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={t('ageForm.description')}
                                name="age"
                                value={this.state.formData.age}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" style={{ padding: '4%' }}>
                            <Form.Label>{t('passwordForm.title')}</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder={t('passwordForm.description')}
                                name="password"
                                value={this.state.formData.password}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Button variant="outline-primary" onClick={this.register}>
                            {t('button')}
                        </Button>
                    </Form>
                </Card>
            </Col>
        );
    }
}

export default withTranslation('registerPanel')(RegisterPanel);
