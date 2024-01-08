import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import PostService from "../Authorisation/PostAuthorisation/PostService";
import Container from "react-bootstrap/Container";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";
import {withTranslation} from "react-i18next";

class ReportsAdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }

        this.adminService = AdminService.getInstance();
    }

    refresh = async () => {
        let data = await this.adminService.validateAndGetAllReportedPosts();
        this.setState({
            posts:data
        })
    }

    async componentDidMount() {
        this.refresh();
    }

    changePostStatus = async (data) => {
        let response =  await this.adminService.validateAndUnReportPost(data);
        this.refresh();
    }

    render() {
        const { t } = this.props;
        return(
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>{t('reports.id')}</th>
                        <th>{t('reports.owner')}</th>
                        <th>{t('reports.subject')}</th>
                        <th>{t('reports.status')}</th>
                        <th>{t('reports.options.title')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(this.state.posts) &&
                        this.state.posts.map((post, index) => (
                            <tr key={index}>
                                <th>{post.id}</th>
                                <th>{post.ownerName}</th>
                                <th>{post.title}</th>
                                <th>Zgloszony</th>
                                <th>
                                    <Button
                                        variant="outline-success"
                                        onClick={() => this.changePostStatus(post.id)}
                                    >
                                        {t('reports.options.button1')}
                                    </Button>
                                    <Button
                                        style={{marginLeft: '10%'}}
                                        variant="outline-success"
                                        href={`/home/post/${post.id}`}
                                    >
                                        {t('reports.options.button2')}
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
export default withTranslation('adminPanel')(ReportsAdminPanel);