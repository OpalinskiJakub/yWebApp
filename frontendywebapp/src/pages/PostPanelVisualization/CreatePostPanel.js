import React, {Component} from "react";
import RegisterAutorization from "../Authorisation/UserAuthorisation/RegisterService";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Post from "../StorageSystem/PostPanel/Model/Post";
import PostService from "../Authorisation/PostAuthorisation/PostService";
import {withTranslation} from "react-i18next";

class CreatePostPanel extends Component{
    constructor() {
        super();
        this.state = {
            createdAlert: false,
            errorAlert:false,
            formData: {
                title: '',
                content: ''
            }
        };
        this.postService = PostService.getInstance();
    }


    handleInputChange = (event) => {
        const {name,value} = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            }
        }));
    };

    createPost = async () => {
        let data = {
            content:this.state.formData.content,
            title:this.state.formData.title
        }
        console.log(data)
        let response = await this.postService.validateAndSendPost(data);
        if(response===true){
            this.setState({
                createdAlert: true,
                errorAlert:false,
            })
        }else{
            this.setState({
                createdAlert: false,
                errorAlert:true,
            })
        }
    }



    render() {
        const { t } = this.props;
        return (
            <Card className="mx-auto" style={{ width: "80%", margin: "10px" }}>
                <Card.Header>
            <Col md={{ span: 8, offset: 2 } } style={{ padding: '5%' }}>
                <Card style={{ padding: '4%' }}>
                    {this.state.errorAlert ? (
                        <Alert
                            variant="danger"
                            onClose={() => this.setState({ validateAlert: false })}
                            dismissible
                            style={{ fontSize: 'smaller' }}
                        >
                            {t('errorAlert')}
                        </Alert>
                    ) : null}

                    {this.state.createdAlert ? (

                        <Alert
                            variant="success"
                            onClose={() => this.setState({ validateAlert: false })}
                            dismissible
                            style={{ fontSize: 'smaller' }}
                        >
                            {t('acceptAlert')}
                        </Alert>

                    ) : null}



                    <Form>
                        <Form.Group controlId="formEmail" style={{ padding: '4%' }}>
                            <Form.Label>{t('titleForm.title')}</Form.Label>
                            < Form.Control
                                required
                                type="text"
                                placeholder={t('titleForm.description')}
                                name="title"
                                value={this.state.formData.title}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formUsername" style={{ padding: '4%' }}>
                            <Form.Label>{t('contentForm.title')}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                required
                                placeholder={t('contentForm.description')}
                                name="content"
                                value={this.state.formData.content}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <Button variant="outline-primary"
                        onClick={this.createPost}
                        >
                            {t('button')}
                        </Button>
                    </Form>
                </Card>
            </Col>
                </Card.Header>
            </Card>

                    );
    }

}
export default  withTranslation('createPostPanel')(CreatePostPanel);