import React, {Component} from "react";
import {Button, Form, DropdownButton, Dropdown, Card,Row,Col} from "react-bootstrap";
import PostService from "../Authorisation/PostAuthorisation/PostService";


class PostPanelComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showReplyForm: false,
            newReply: '',
            voteState:true
        };
        this.postService = PostService.getInstance();

    }



    checkState = async () => {
            let votes = this.props.comment.upvoteUserId;
            let response = await this.postService.checkVoteState(votes);
            if(response==true){
                this.setState({
                    voteState:true
                })
            }else {
                this.setState({
                    voteState:false
                })
            }

    }
    async componentDidMount() {
        let votes = this.props.comment.upvoteUserId;
        let response = await this.postService.checkVoteState(votes);
        if(response==true){
            this.setState({
                voteState:false
            })
        }else {
            this.setState({
                voteState:true
            })
        }
    }


    addReply = async () => {
        let data= {
            content:this.state.newReply,
            commentId:this.props.comment.id,
        }
        let response = await this.postService.addReplyComment(data);
        const { refresh } = this.props;
        await refresh();
    }

    removeComment = async () => {
        await this.postService.validateAndRemoveComment(this.props.comment.id);
        const { refresh } = this.props;
        await refresh();
    }


    addVote = async () => {
        let response = await this.postService.validateAndAddCommentVote(this.props.comment.id)
        console.log(response);
        this.checkState();
        const { refresh } = this.props;
        await refresh();
    }

    render() {
        const { comment, handleReply, isReply } = this.props;

        const replyStyle = {
            borderLeft: isReply ? '3px solid blue' : 'none',
            paddingLeft: isReply ? '5%' : '1%',
            marginLeft: isReply ? '5%' : '1%',
            marginRight: isReply ? '5%' : '3%',
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
        const buttonStyle3 = {
            fontSize: '200%',
            padding: '10%',
        }

        const buttonStyleLike = {
            fontSize: '100%',
            padding: '10%',

        }
        const buttonStyleUnlike = {
            fontSize: '64%',
            padding: '1%',
        }

        const { refresh } = this.props;

        return (
            <div style={replyStyle}>
            <Card className="m-3" style={{ padding: 10 }} >
                <Card.Title >
                    <Row xs="auto">

                        <Col>
                            {this.props.comment.ownerName}
                        </Col>
                        <Col>
                            {this.props.comment.ownerName ? <Card style={{padding:4 ,fontSize:15}}>
                                Odpowiada
                            </Card> : ""}

                        </Col>
                        <Col>
                            {this.props.comment.ownerName}
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
                            {this.props.comment.upvote} polubień
                        </Card>

                    </Col>
                    <Col>
                        {this.state.voteState ?
                            <Button
                                variant="outline-primary"
                                style={buttonStyleLike}
                                onClick={this.addVote}
                            >
                                Polub
                            </Button>
                            :
                            <Button
                            variant="outline-primary"
                            style={buttonStyleUnlike}
                            onClick={this.addVote}
                            >
                                Usun polubienie
                            </Button>
                        }

                    </Col>
                    <Col>
                        <Button variant="outline-primary" style={buttonStyle2} onClick={() => this.setState({ showReplyForm: !this.state.showReplyForm })}>
                            Odpowiedz
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            variant="outline-primary"
                            style={buttonStyle}
                            onClick={this.removeComment}
                        >
                            Usuń
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
                        <Button variant="outline-primary" onClick={this.addReply} style={{padding:4 ,fontSize:15, marginTop:10}}>
                            Dodaj Odpowiedź
                        </Button>


                    </div>
                )}
            </Card>
                {Array.isArray(this.props.comment.systemCommentList) &&
                    this.props.comment.systemCommentList.map((comment, index) => (
                        <PostPanelComment key={index} comment={comment} refresh={refresh} />
                    ))}


    </div>
        );
    }
}

export default PostPanelComment;

/*
{this.props.comment.answers.map((comment, index) => (
                    <PostPanelComment key={index} comment={comment} parentName={this.props.comment.author.name}/>
                ))}
 */