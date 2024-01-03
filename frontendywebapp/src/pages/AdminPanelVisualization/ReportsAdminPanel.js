import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import PostService from "../Authorisation/PostAuthorisation/PostService";
import Container from "react-bootstrap/Container";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";

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
        return(
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Wlascicel</th>
                        <th>Temat</th>
                        <th>Status</th>
                        <th>Opcje</th>
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
                                        Usun zgloszenie
                                    </Button>
                                    <Button
                                        style={{marginLeft: '10%'}}
                                        variant="outline-success"
                                        href={`/home/post/${post.id}`}
                                    >
                                        Zobacz post
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
export default ReportsAdminPanel;