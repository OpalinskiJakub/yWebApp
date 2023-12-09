import React, {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";
import PostPanelCommentVizualization from "./PostPanelCommentVizualization";
import PostIndexDB from "../StorageSystem/Post/PostIndexDB";
import data from "bootstrap/js/src/dom/data";
import PostApiConnector from "../StorageSystem/Post/PostApiConnector";

global.Api = new PostApiConnector();


class PostPanel extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title:'',
            content:'',
            comments: [],
            newComment: ''
        };
    }
    async componentDidMount() {
        try {
            await global.Api.getPostById();
            let db = await global.Api.getDb();
            let result = await db.mapPostsDataToPosts();
            this.setState({ title: result[0].title });
            this.setState({ content: result[0].content})
            console.log(this.result);
        } catch (error) {
            console.error('Error during mapping posts data:', error);
        }
    }



    handleAddComment = () => {
        const comment = {
            text: this.state.newComment,
            replies: []
        };
        this.setState({ comments: [...this.state.comments, comment], newComment: '' });
    };

    handleReply = (parentComment, replyText) => {
        const reply = {
            text: replyText,
            replies: []
        }
        parentComment.replies.push(reply);
        this.setState({ comments: [...this.state.comments] });
    };

    render() {
        return (
            <Card data-bs-theme="dark" className="m-3">
                <Card.Body>
                    <Card.Title>
                        <p>{this.state.title}</p>
                    </Card.Title>
                    <Card.Text>
                        <p>{this.state.content}</p>
                    </Card.Text>

                    <div>
                        <h5>Komentarze:</h5>
                        {this.state.comments.map((comment, index) => (
                            <PostPanelCommentVizualization key={index} comment={comment} handleReply={this.handleReply} />
                        ))}
                    </div>

                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            placeholder="Dodaj komentarz..."
                            value={this.state.newComment}
                            onChange={(e) => this.setState({ newComment: e.target.value })}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleAddComment}>Dodaj Komentarz</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default PostPanel;