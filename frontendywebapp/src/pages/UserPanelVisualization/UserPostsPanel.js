import React, {Component} from "react";
import PostService from "../Authorisation/PostAuthorisation/PostService";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import {withTranslation} from "react-i18next";
class UserPostsPanel extends Component{
    constructor() {
        super();
        this.state = {
            posts: [],
        };
        this.postService = PostService.getInstance();
    }

    async componentDidMount() {
        const response = await this.postService.validateAndGetUserPosts();
        this.setState({
            posts: response,
        });
    }


    render() {
        const { t } = this.props;
        return (
            <Card className="mx-auto" style={{ width: "80%", margin: "10px" }}>
                <Card.Header>
                    <Col md={{ span: 9, offset: 1 } } style={{ padding: '5%' }}>
                        {this.state.posts.length >= 1 ?  (
                            this.state.posts.map((post, index) => (
                                <Card style={{marginBottom:'2%'}}>
                                    <Card.Body>
                                        <Row>
                                            <Col key={index} sm={10}>
                                                {post.title}
                                            </Col>
                                            <Col sm={2}>
                                                <Button
                                                    variant="outline-primary"
                                                    href={`/home/post/${post.id}`}
                                                >
                                                    {t('postPreview')}
                                                </Button>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>


                            ))
                        ): null}


                    </Col>
                </Card.Header>
            </Card>

        );
    }

}
export default withTranslation('home')(UserPostsPanel);