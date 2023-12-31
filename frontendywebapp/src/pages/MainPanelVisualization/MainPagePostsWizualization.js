
import {Card} from "react-bootstrap";
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import PostService from "../Authorisation/PostAuthorisation/PostService";
import Container from "react-bootstrap/Container";

class MainPagePostsWizualization extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
        this.postService = PostService.getInstance();
    }

    async componentDidMount() {
        const response = await this.postService.getAllPostPreview();
        this.setState({
            posts: response,
        });
    }

    render() {
        return (
            <Container>
                {this.state.posts.map((post, index) => (
                    <Card key={index} className="mx-auto" style={{ width: '80%', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="outline-primary" href={`/home/post/${post.id}`}>
                                Zobacz post
                            </Button>
                        </Card.Footer>
                    </Card>
                ))}
            </Container>
        );
    }
}

export default MainPagePostsWizualization;


