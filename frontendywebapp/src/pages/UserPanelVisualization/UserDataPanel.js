import {Component} from "react";
import {Button, Card, Form,Nav,ListGroup ,Col,Image,Container,Row} from "react-bootstrap";
import UserService from "../StorageSystem/UserPanel/UserService";
class UserDataPanel extends Component{
    constructor() {
        super();
        this.state = {
            username:'',
            email:'',
            age: '',
            description: ''
        };
        this.service= new UserService();
    }

    async componentDidMount() {
        /*let user = await this.service.getUser();
        this.setState({
            username: user.username,
            email: user.email,
            age: user.age,
            description: user.description
        });*/
    }

    render() {
        return(
            <Container>
                <Row>
                <Col xs={5} md={3}>
                <Image src="" thumbnail />
                </Col>

                    <Col xs={12} md={6}>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>Nazwa użytkowanika</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.state.username}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>Email</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.state.email}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>Wiek</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.state.age}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>Opis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.state.description}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserDataPanel;