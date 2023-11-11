import React, {Component} from "react";
import {Button, Form,DropdownButton,Dropdown} from "react-bootstrap";


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
            borderLeft: isReply ? '3px solid blue' : 'none',
            paddingLeft: isReply ? '13px' : '0',
            marginLeft: isReply ? '10px' : '20px',
            marginTop: isReply ? '0px' : '10px'
        };


        const lineStyle = {
            position: 'absolute',
            top: '50%',
            left: '-10px',
            transform: 'translateY(-50%)',
            height: '2px',
            width: '10px',
            backgroundColor: 'blue',
        };

        const buttonStyle = {
            fontSize: '0.8em', // Jeszcze mniejsza czcionka
            padding: '1px 3px',
        };

        return (
            <div style={replyStyle}>
                <p>{comment.text}</p>



                <DropdownButton id="dropdown-basic-button" title="Opcje" style={buttonStyle}>
                    <Dropdown.Item onClick={() => this.setState({ showReplyForm: !this.state.showReplyForm })}>
                        Odpowiedź
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>

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