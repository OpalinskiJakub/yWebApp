import React, {Component} from "react";
import {Breadcrumb, Button, Card, Col, Form, Row} from "react-bootstrap";
import PostPanelComment from "./PostPanelComment";
import PostRequests from "../ApiServices/PostRequests/PostRequests";
import { useParams } from 'react-router-dom';
import PostService from "../Authorisation/PostAuthorisation/PostService";
import Container from "react-bootstrap/Container";
import {withTranslation} from "react-i18next";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";



class PostPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPostOwner:false,

            showEditForm: false,

            newComment:'',
            newContent:'',

            voteState:true,

            postId: this.props.params.postId,
            post: '',
        };
        this.postService = PostService.getInstance();
        this.adminService = AdminService.getInstance();
    }



    checkState = async () => {
        let votes = this.state.post.upvoteUserId;
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

    checkStateDidMount = async (votes) => {
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
        await this.checkStateDidMount(response.upvoteUserId);
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
        this.checkState();
        console.log(response);
        await this.refresh();
    }

    reportPost = async () => {
        let data = {
            postId:this.state.post.id,
        }
        console.log(data)
        let response = await this.postService.validateAndReportPost(data);
        await this.refresh();
    }


    addComment = async () => {
        let data= {
            content:this.state.newComment,
            postId:this.state.post.id,
        }
        console.log(data)
        let response = await this.postService.validateAndSendComment(data);
        console.log(response);
        await this.refresh();
    };

    render() {
        const { t } = this.props;


        const buttonStyle = {
            fontSize: '100%',
            padding: '10%',
        };

        const buttonStyle2 = {
            fontSize: '90%',
            padding: '7%',
        };

        const buttonStyleLike = {
            fontSize: '100%',
            padding: '10%',

        }
        const buttonStyleUnlike = {
            fontSize: '64%',
            padding: '1%',
        }
        return (
            <Card data-bs-theme="dark" className="m-3">
                <Card.Body>
                    <Card className="m-3" style={{ padding: 10 }}>
                        <Card.Title>{this.state.post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <Breadcrumb>
                                <Breadcrumb.Item
                                    href={`/home/user/${this.state.post.ownerId}`}
                                    style={{ textDecoration: 'none', fontSize: 'larger' }}
                                >
                                    {this.state.post.ownerName}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Subtitle>
                        <Card.Text>{this.state.post.content}</Card.Text>

                        <Row xs="auto">
                            <Col>
                                <Card style={{padding:5}}>
                                    {this.state.post.upvote}   {t('numberoflikes')}
                                </Card>

                            </Col>
                            <Col>
                                {this.state.voteState ?
                                    <Button
                                        variant="outline-primary"
                                        style={buttonStyleLike}
                                        onClick={this.addVote}
                                    >
                                        {t('likeForm.like')}
                                    </Button>
                                    :
                                    <Button
                                        variant="outline-primary"
                                        style={buttonStyleUnlike}
                                        onClick={this.addVote}
                                    >
                                        {t('likeForm.unlike')}
                                    </Button>
                                }
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    style={buttonStyle}
                                    onClick={this.reportPost}
                                >
                                    {t('report')}
                                </Button>
                            </Col>
                            {this.state.isPostOwner && (
                            <>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    style={buttonStyle}
                                    onClick={() => this.setState({ showEditForm: !this.state.showEditForm })}
                                >
                                    {t('editForm.title')}
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    variant="outline-primary"
                                    style={buttonStyle}
                                    onClick={this.removePost}
                                    href="/home"
                                >
                                    {t('remove')}
                                </Button>
                            </Col>
                            </>
                            )}
                        </Row>
                        {this.state.showEditForm && (
                            <Form>
                                <Form.Group style={{ marginTop: '10px' }}>
                                    <Form.Control
                                        as="textarea"
                                        placeholder={t('editForm.description')}
                                        value={this.state.newContent}
                                        onChange={(e) => this.setState({ newContent: e.target.value })}
                                    />
                                </Form.Group>
                                <Button variant="outline-primary" onClick={this.editPost} style={{padding:4 ,fontSize:17, marginTop:10}}>
                                    {t('editForm.button')}
                                </Button>
                            </Form>
                        )}
                    </Card>
                </Card.Body>
                <Card.Body>
                    <Card className="m-3" style={{ padding: 10 }}>
                        <Card.Title>{t('comment.title')}:</Card.Title>
                        {Array.isArray(this.state.post.systemCommentList) &&
                            this.state.post.systemCommentList.map((comment, index) => (
                                <PostPanelComment key={index} comment={comment} refresh={this.refresh} firstRow={false} />
                            ))}
                        <Form.Group>
                            <Form.Control
                                as="textarea"
                                placeholder={t('comment.commentForm.description')}
                                value={this.state.newComment}
                                onChange={(e) => this.setState({ newComment: e.target.value })}
                            />
                        </Form.Group>
                        <Button
                            variant="outline-primary"
                            onClick={this.addComment}
                            style={{ padding: 4, fontSize: 15, marginTop: 10 }}
                        >
                            {t('comment.commentForm.button')}
                        </Button>
                    </Card>
                </Card.Body>
            </Card>


        );
    }
}

export default withTranslation('postPanel')((props) => (
    <PostPanel
        {...props}
        params={useParams()}
    />
));
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