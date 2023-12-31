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
            postId:this.props.params.postId,
            title:''
        };
        this.postService = PostService.getInstance();
    }
    async componentDidMount() {
        await this.refresh();
    }

    refresh = async () => {
        let response = await this.postService.getPostById(this.state.postId);
        console.log(response);
    }

    handleAddComment = () => {

    };



    render() {
        return (
            <Card data-bs-theme="dark" className="m-3">
                <Card.Title>
                    <Card className="m-3" style={{ padding: 10 }} >
                        <Card.Title >
                            {this.state.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.author}</Card.Subtitle>
                        <Card.Text>
                            {this.state.content}
                        </Card.Text>
                    </Card>
                </Card.Title>
                <Card.Body>
                    <Card className="m-3" style={{ padding: 10 }} >
                        <Card.Title >
                            Komentarze:
                        </Card.Title>
                        <Card.Text>

                        </Card.Text>
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