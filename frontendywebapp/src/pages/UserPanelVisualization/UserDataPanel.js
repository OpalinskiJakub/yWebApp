import {Component} from "react";
import {Button, Card, Form,Nav,ListGroup ,Col,Image,Container,Row} from "react-bootstrap";
class UserDataPanel extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <Container>
                <Row>
                <Col xs={5} md={3}>
                <Image src="https://iili.io/JTuYaUP.jpg" thumbnail />
                </Col>

                    <Col xs={12} md={6}>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>Nazwa użytkowanika</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>Email</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>Wiek</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>Opis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserDataPanel;