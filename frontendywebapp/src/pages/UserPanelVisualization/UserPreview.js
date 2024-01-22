import React, {Component} from "react";
import {Card, Col, Container, Image, ListGroup, Nav, Row} from "react-bootstrap";
import {Link, Outlet, useParams} from "react-router-dom";
import {withTranslation} from "react-i18next";
import SessionUserStorageSystem from "../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import UserService from "../Authorisation/UserAuthorisation/UserService";

class UserPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            age: '',
            description: '',
            avatarUrl: '',

            userId: props.params.userId,
        };
        this.userService=  new UserService();
    }

        async componentDidMount() {
        console.log(this.state.userId)
        let user = await this.userService.validateAndGetUser(this.state.userId);
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

        return (
            <Card className="mx-auto" style={{ width: "80%", margin: "10px" }}>
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
            </Card>
        );
    }
}

function WithParams(props) {
    let params = useParams();
    return <UserPreview {...props} params={params} />;
}

export default withTranslation('userDataPanel')(WithParams);
