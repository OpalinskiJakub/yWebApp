import React, {Component} from "react";
import {Button, Form, DropdownButton, Dropdown, Card,Row,Col} from "react-bootstrap";
import PostService from "../Authorisation/PostAuthorisation/PostService";
import SessionUserStorageSystem from "../StorageSystem/UserStorageSystem/SessionUserStorageSystem";


class PostPanelComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showReplyForm: false,
            newReply: '',
            voteState:true,
            isCommentOwner:false,
            isFirstRowComment:true
        };
        this.postService = PostService.getInstance();
    }

    checkIsCommentOwner = async () => {
        let response = await this.postService.checkCommentOwner(this.props.comment.ownerId);
        if(response){
            this.setState({
                isCommentOwner:true
            })
        }
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
        this.checkIsCommentOwner()
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
        this.checkIsCommentOwner()
        this.checkFirstRowComment()
    }


    addReply = async () => {
        let data= {
            content:this.state.newReply,
            commentId:this.props.comment.id,
        }
        let response = await this.postService.addReplyComment(data);
        const { refresh } = this.props;
        await refresh();
        this.checkIsCommentOwner()
    }

    removeComment = async () => {
        console.log("jest")
        await this.postService.validateAndRemoveComment(this.props.comment.id);
        const { refresh } = this.props;
        await refresh();
        this.checkIsCommentOwner()
    }


    addVote = async () => {
        let response = await this.postService.validateAndAddCommentVote(this.props.comment.id)
        console.log(response);
        this.checkState();
        const { refresh } = this.props;
        await refresh();
        this.checkIsCommentOwner()
    }

    checkFirstRowComment = () => {
        if(this.props.firstRow!=null){
            if(this.props.firstRow===false){
                this.setState({
                    isFirstRowComment:false
                })
            }
        }

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
                        {this.state.isFirstRowComment ?
                        <>
                        <Col>
                                Odpowiada


                        </Col>
                        <Col>
                            {this.props.comment.parentOwnerName}
                        </Col>
                        </>
                        :null}
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
                    {this.state.isCommentOwner &&
                        <Col>
                            <Button
                                variant="outline-primary"
                                style={buttonStyle}
                                onClick={this.removeComment}
                            >
                                Usuń
                            </Button>
                        </Col>
                    }

                </Row>

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

