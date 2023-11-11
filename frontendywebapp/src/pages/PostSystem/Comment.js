import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showReplyForm: false,
            newReply: ''
        };
    }

    handleAddReply = () => {
        this.props.handleReply(this.props.comment, this.state.newReply);
        this.setState({ newReply: '', showReplyForm: false });
    };

    render() {
        const { comment, handleReply, isReply } = this.props;

        const replyStyle = {
            borderLeft: isReply ? '2px solid blue' : 'none',
            paddingLeft: isReply ? '10px' : '0',
            marginLeft: isReply ? '10px' : '20px',
            marginTop: '10px'
        };

        const buttonStyle = {
            fontSize: '0.8em',
            padding: '5px 10px'
        };

        return (
            <div style={replyStyle}>
                <p>{comment.text}</p>
                <Button
                    variant="outline-primary"
                    onClick={() => this.setState({ showReplyForm: !this.state.showReplyForm })}
                    style={buttonStyle}
                >
                    Odpowiedz
                </Button>
                {comment.replies && comment.replies.map((reply, index) => (
                    <Comment
                        key={index}
                        comment={reply}
                        handleReply={handleReply}
                        isReply
                    />
                ))}
                {this.state.showReplyForm && (
                    <div>
                        <Form.Group style={{ marginTop: '10px' }}>
                            <Form.Control
                                as="textarea"
                                placeholder="Dodaj odpowiedź..."
                                value={this.state.newReply}
                                onChange={(e) => this.setState({ newReply: e.target.value })}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={this.handleAddReply} style={buttonStyle}>
                            Dodaj Odpowiedź
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

export default Comment;