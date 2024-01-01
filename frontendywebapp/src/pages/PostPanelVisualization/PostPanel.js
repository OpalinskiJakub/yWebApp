import React, {Component} from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import PostPanelComment from "./PostPanelComment";
import PostRequests from "../ApiServices/PostRequests/PostRequests";
import { useParams } from 'react-router-dom';
import PostService from "../Authorisation/PostAuthorisation/PostService";
import Container from "react-bootstrap/Container";



class PostPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPostOwner:false,

            showReplyForm: false,
            newContent:'',

            postId: this.props.params.postId,
            post: '',
        };
        this.postService = PostService.getInstance();
    }

    checkIsPostOwner = async (data) => {
        let response = await this.postService.checkOwner(data);
        this.setState({
            isPostOwner:response
        })
    }

    componentDidMount = async () => {
        await this.refresh();

    };

    refresh = async () => {
        let response = await this.postService.getPostById(this.state.postId);
        await this.setState({
            post: response,
            commentList: response.systemCommentList,
        });
        await this.checkIsPostOwner(response.ownerId);
    };

    editPost = async () => {
        let data = {
            postId:this.state.post.id,
            content:this.state.newContent
        }
        let response = await this.postService.validateAndEditPost(data);
        await this.refresh();
    }
    removePost = async () => {
        let response = await this.postService.validateAndRemovePost(this.state.post.id);
        console.log(response);
    }

    addVote = async () => {
        let response = await this.postService.validateAndAddVote(this.state.postId);
        console.log(response);
        await this.refresh();
    }


    handleAddComment = () => {
        // Add your comment handling logic here
    };

    render() {
        const buttonStyle = {
            fontSize: '100%',
            padding: '10%',
        };

        const buttonStyle2 = {
            fontSize: '90%',
            padding: '7%',
        };
        return (
            <Card data-bs-theme="dark" className="m-3">
                <Card.Body>
                    <Card className="m-3" style={{ padding: 10 }}>
                        <Card.Title>{this.state.post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.post.ownerName}</Card.Subtitle>
                        <Card.Text>{this.state.post.content}</Card.Text>

                        <Row xs="auto">
                            <Col>
                                <Card style={{padding:5}}>
                                    {this.state.post.upvote} polubień
                                </Card>

                            </Col>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    style={buttonStyle}
                                    onClick={this.addVote}
                                >
                                    Polub
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="outline-primary" style={buttonStyle} >
                                    Zglos
                                </Button>
                            </Col>
                            {this.state.isPostOwner && (
                            <>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    style={buttonStyle}
                                    onClick={() => this.setState({ showReplyForm: !this.state.showReplyForm })}
                                >
                                    Edytuj
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    style={buttonStyle}
                                    onClick={this.removePost}

                                >
                                    Usuń
                                </Button>
                            </Col>
                            </>
                            )}
                        </Row>
                        {this.state.showReplyForm && (
                            <Form>
                                <Form.Group style={{ marginTop: '10px' }}>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Wpisz nowa tresc..."
                                        value={this.state.newContent}
                                        onChange={(e) => this.setState({ newContent: e.target.value })}
                                    />
                                </Form.Group>
                                <Button variant="outline-primary" onClick={this.editPost} style={{padding:4 ,fontSize:17, marginTop:10}}>
                                    Wyslij
                                </Button>
                            </Form>
                        )}
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