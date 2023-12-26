import React, {Component} from 'react';
import {Button, Card, Col, Form} from 'react-bootstrap';
import Alert from "react-bootstrap/Alert";
import userAutorization from "../Autorization/User/UserAutorization";

class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validateAlert: false,
            formData: {
                name: '',
                password: '',
            },
            cardPadding: '8%',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.autorization= new userAutorization();
    };

    handleInputChange (event){
        const {name, value} = event.target;
        console.log(name, value)
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            }
        }));
    };

    closeValidateAlert=()=>{
        this.setState({
            validateAlert: false,
            cardPadding: '8%',
        })
    }

    validate=()=>{
        console.log(this.state.formData.name,this.state.formData.password)
        this.autorization.login(this.state.formData.name,this.state.formData.password);
    }


    render() {
        const {formData} = this.state;

        return (
            <Col md={{span: 3, offset: 2}} style={{marginTop: this.state.cardPadding}}>
                <Card style={{padding: '7%'}}>
                    {
                        this.state.validateAlert ? (
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

                </Card>
            </Col>
        );
    }
}


export default LoginPanel;