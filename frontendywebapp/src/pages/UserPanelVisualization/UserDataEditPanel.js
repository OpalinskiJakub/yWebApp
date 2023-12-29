import {Component} from "react";
import {Button, Card, Form,Nav,ListGroup ,Col,Image,Container,Row,InputGroup,Accordion} from "react-bootstrap";
import SessionUserStorageSystem from "../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
class UserDataEditPanel extends Component{
    constructor(props) {
        super(props);

        this.test= SessionUserStorageSystem.getInstance();
    }

    render() {
        return(
            <Container>
                <Row>
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Nazwa uzytkownika</Accordion.Header>
                        <Accordion.Body>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Nazwa uzytkownika"
                                    aria-label="Nazwa uzytkownika"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-primary" id="button-addon2" onClick={this.test.isAdmin}>
                                    Button
                                </Button>
                            </InputGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>E-mail</Accordion.Header>
                        <Accordion.Body>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="E-mail"
                                    aria-label="E-mail"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-primary" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Opis</Accordion.Header>
                        <Accordion.Body>
                            <InputGroup className="mb-3" >
                                <InputGroup
                                    placeholder="Recipient's username"
                                >
                                    <Form.Control as="textarea" />
                                </InputGroup>

                            </InputGroup>
                            <Button variant="outline-primary">Primary</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                </Row>



            </Container>
        )
    }


}

export default UserDataEditPanel;