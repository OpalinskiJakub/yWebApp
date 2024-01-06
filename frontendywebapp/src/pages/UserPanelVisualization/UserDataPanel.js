import {Component} from "react";
import {Button, Card, Form,Nav,ListGroup ,Col,Image,Container,Row} from "react-bootstrap";

import SessionUserStorageSystem from "../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import {withTranslation} from "react-i18next";
class UserDataPanel extends Component{
    constructor() {
        super();
        this.state = {
            username:'',
            email:'',
            age: '',
            description: '',
            avatarUrl:''
        };
        this.userSessionStorage = SessionUserStorageSystem.getInstance();
    }

    async componentDidMount() {
        let user = await this.userSessionStorage.getUserFromLocalStorage();
        this.setState({
            username:user.username,
            email:user.email,
            age:user.age,
            description:user.description,
            avatarUrl:user.avatarUrl
        })
    }

    render() {
        const { t } = this.props;
        return(
            <Container>
                <Row>
                <Col xs={5} md={3}>
                <Image src="" thumbnail />
                </Col>

                    <Col xs={12} md={6}>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>{t('name')}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.state.username}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>{t('email')}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.state.email}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>{t('age')}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.state.age}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card style={{ width: '100%', marginTop: '10px',marginBottom: '10px' }}>
                            <Card.Header>{t('description')}</Card.Header>
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

export default withTranslation('userDataPanel')(UserDataPanel);