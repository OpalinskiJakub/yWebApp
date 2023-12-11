import React, {Component} from "react";
import {Button, Form, DropdownButton, Dropdown, Card,Row,Col} from "react-bootstrap";


class PostPanelComment extends Component {
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
            paddingLeft: isReply ? '5%' : '0',
            marginLeft: isReply ? '5%' : '1%',
            marginRight: isReply ? '5%' : '1%',
            marginTop: isReply ? '0' : '1%'
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
            fontSize: '100%',
            padding: '10%',
        };

        const buttonStyle2 = {
            fontSize: '90%',
            padding: '7%',
        };

        return (
            <div style={replyStyle}>
            <Card className="m-3" style={{ padding: 10 }} >
                <Card.Title >
                    <Row xs="auto">
                        <Col>
                            {this.props.comment.author.name}
                        </Col>
                        <Col>
                            {this.props.parentName ? <Card style={{padding:4 ,fontSize:15}}>
                                Odpowiada
                            </Card> : ""}

                        </Col>
                        <Col>
                            {this.props.parentName}
                        </Col>

                    </Row>
                </Card.Title>
                <Card.Text>
                    <Card>
                    <Card.Body>
                        {this.props.comment.content}
                    </Card.Body>
                    </Card>
                </Card.Text>

                <Row xs="auto">
                    <Col>
                        <Card style={{padding:5}}>
                                1 polubień
                        </Card>

                    </Col>
                    <Col>
                        <Button variant="outline-primary" style={buttonStyle} onClick={() => this.setState({ showReplyForm: !this.state.showReplyForm })}>
                            Polub
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary" style={buttonStyle2}>
                            Odpowiedz
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary" style={buttonStyle} >
                            Usuń
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary" style={buttonStyle} >
                            Zgłoś
                        </Button>
                    </Col>
                </Row>
                {comment.replies && comment.replies.map((reply, index) => (
                    <PostPanelComment
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
            </Card>

                {this.props.comment.answers.map((comment, index) => (
                    <PostPanelComment key={index} comment={comment} parentName={this.props.comment.author.name}/>
                ))}
    </div>
        );
    }
}

export default PostPanelComment;