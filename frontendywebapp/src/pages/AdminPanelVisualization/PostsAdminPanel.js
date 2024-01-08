import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";
import Container from "react-bootstrap/Container";
import UserService from "../Authorisation/UserAuthorisation/UserService";
import PostService from "../Authorisation/PostAuthorisation/PostService";
import {withTranslation} from "react-i18next";

class PostsAdminPanel extends Component{
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }

        this.postService = PostService.getInstance();
    }

    refresh = async () => {
        let data = await this.postService.getAllPostPreview();
        this.setState({
            posts:data
        })
    }

    async componentDidMount() {
        this.refresh();
    }

    changePostStatus = async (data) => {
        let response=  await this.postService.validateAndRemovePost(data);
        this.refresh();
    }

    render() {
        const { t } = this.props;
        return(
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>{t('adminPosts.id')}</th>
                        <th>{t('adminPosts.owner')}</th>
                        <th>{t('adminPosts.subject')}</th>
                        <th>{t('adminPosts.options.title')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(this.state.posts) &&
                        this.state.posts.map((post, index) => (
                            <tr key={index}>
                                <th>{post.id}</th>
                                <th>{post.ownerName}</th>
                                <th>{post.title}</th>
                                <th>
                                    <Button
                                        variant="outline-success"
                                        onClick={() => this.changePostStatus(post.id)}
                                    >
                                        {t('adminPosts.options.button1')}
                                    </Button>
                                    <Button
                                        style={{marginLeft:'10%'}}
                                        variant="outline-success"
                                        href={`/home/post/${post.id}`}
                                    >
                                        {t('adminPosts.options.button2')}
                                    </Button>

                                </th>
                            </tr>
                        ))}


                    </tbody>
                </Table>
            </Container>
        );
    }
}
export default withTranslation('adminPanel')(PostsAdminPanel);