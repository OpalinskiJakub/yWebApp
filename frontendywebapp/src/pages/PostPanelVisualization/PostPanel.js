import React, {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";
import PostPanelComment from "./PostPanelComment";
import PostRequests from "../ApiServices/PostRequests/PostRequests";
import { useParams } from 'react-router-dom';
import PostService from "../Authorisation/PostAuthorisation/PostService";



class PostPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.params.postId,
            post: '',
        };
        this.postService = PostService.getInstance();
    }

    componentDidMount = async () => {
        await this.refresh();
        console.log(this.state.post.title);
    };

    refresh = async () => {
        let response = await this.postService.getPostById(this.state.postId);
        console.log(response);

        await this.setState({
            post: response,
            commentList: response.systemCommentList,
        });

        await console.log(this.state.post.title);
    };

    handleAddComment = () => {
        // Add your comment handling logic here
    };

    render() {
        return (
            <Card data-bs-theme="dark" className="m-3">
                <Card.Body>
                    <Card className="m-3" style={{ padding: 10 }}>
                        <Card.Title>{this.state.post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.post.ownerName}</Card.Subtitle>
                        <Card.Text>{this.state.post.content}</Card.Text>
                    </Card>
                </Card.Body>
                <Card.Body>
                    <Card className="m-3" style={{ padding: 10 }}>
                        <Card.Title>Komentarze:</Card.Title>
                        {Array.isArray(this.state.post.systemCommentList) &&
                            this.state.post.systemCommentList.map((comment, index) => (
                                <PostPanelComment key={index} comment={comment} />
                            ))}
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                placeholder="Dodaj komentarz..."
                                value={this.state.newComment}
                                onChange={(e) => this.setState({ newComment: e.target.value })}
                            />
                        </Form.Group>
                        <Button
                            variant="outline-primary"
                            onClick={this.handleAddComment}
                            style={{ padding: 4, fontSize: 15, marginTop: 10 }}
                        >
                            Dodaj Komentarz
                        </Button>
                    </Card>
                </Card.Body>
            </Card>


        );
    }
}

export default (props) => (
    <PostPanel
        {...props}
        params={useParams()}
    />
);
/*
{this.state.comments.map((comment, index) => (
                                <PostPanelComment key={index} comment={comment} />
                            ))}
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Dodaj komentarz..."
                                    value={this.state.newComment}
                                    onChange={(e) => this.setState({ newComment: e.target.value })}
                                />
                            </Form.Group>
                            <Button variant="outline-primary" onClick={this.handleAddComment} style={{padding:4 ,fontSize:15, marginTop:10}}>
                                Dodaj Komentarz
                            </Button>
 */