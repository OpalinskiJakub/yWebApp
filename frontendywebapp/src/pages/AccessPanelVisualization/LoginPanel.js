import React, {Component} from 'react';
import {Button, Card, Col, Form} from 'react-bootstrap';
import Alert from "react-bootstrap/Alert";
import userAutorization from "../Authorisation/UserAuthorisation/UserAuthorization";
import {Navigate} from "react-router-dom";
import LoginService from "../Authorisation/UserAuthorisation/LoginService";
class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect:false,
            ErrorAlert: false,
            formData: {
                name: '',
                password: '',
            },
            cardPadding: '8%',
        };

        this.autorization= LoginService.getInstance();
    };

    handleInputChange= (event)=>{
        const {name, value} = event.target;
        this.setState((prevState) => ({
            shouldRedirect:false,
            formData: {
                ...prevState.formData,
                [name]: value,
            }
        }));
    };

    closeValidateAlert=() =>{
        this.setState({
            validateAlert: false,
            cardPadding: '8%',
        })
    }

    validate = async()=>{
        const data = {
            email:this.state.formData.name,
            password:this.state.formData.password
        }
        let response = await this.autorization.login(data);
        console.log(response.status)
        if(response.status===false){
            this.setState({
                ErrorAlert:true
            })
        }else {
            this.setState({
                shouldRedirect:true
            })
        }

    }


    render() {
        const {formData} = this.state;

        return (
            <Col md={{span: 3, offset: 2}} style={{marginTop: this.state.cardPadding}}>
                <Card style={{padding: '7%'}}>
                    {
                        this.state.ErrorAlert ? (
                            <Alert variant="danger" onClose={this.closeValidateAlert} dismissible>
                                Niepoprawne dane
                            </Alert>

                        ) : null
                    }

                    <Form>
                        <Form.Group controlId="formName" style={{padding: '4%'}}>
                            <Form.Label>Nazwa użytkownika</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" style={{padding: '4%'}}>
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={this.handleInputChange}
                            />

                        </Form.Group>

                        <Button variant="outline-primary" onClick={this.validate}>Zaloguj sie</Button>
                    </Form>
                    {this.state.shouldRedirect ? <Navigate to="/home" /> : null}
                </Card>
            </Col>
        );
    }
}


export default LoginPanel;