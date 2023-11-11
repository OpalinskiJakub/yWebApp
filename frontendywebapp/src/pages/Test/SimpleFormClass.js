import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SimpleFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            onscreentext:''

        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Wpisany tekst:', this.state.inputText);
        this.setState({onscreentext:this.state.inputText});
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Wpisz tekst:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Wpisz tutaj"
                        value={this.state.inputText}
                        onChange={(e) => this.setState({ inputText: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Wyślij
                </Button>
                <p>{this.state.onscreentext}</p>
            </Form>
        );
    }
}

export default SimpleFormClass;
