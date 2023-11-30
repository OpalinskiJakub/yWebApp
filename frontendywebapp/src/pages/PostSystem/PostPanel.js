import React, {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";
import PostPanelCommentVizualization from "./PostPanelCommentVizualization";
import PostIndexDB from "../StorageSystem/Post/PostIndexDB";
import data from "bootstrap/js/src/dom/data";


class PostPanel extends Component {


    constructor(props) {
        super(props);



        this.state = {
            test:'',
            comments: [],
            newComment: ''
        };
       // console.log(this.tempPost);
    }
    componentDidMount() {
        let db = new PostIndexDB();
        console.log('1213');
        db._fetchDataFromIndexedDB().then(data => console.log(data[0]));

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
                    <Card.Title>{this.state.test}</Card.Title>
                    <Card.Text>
                        Tresc posta
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