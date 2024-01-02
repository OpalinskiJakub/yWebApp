import React, {Component} from "react";
import UserService from "../Authorisation/UserAuthorisation/UserService";
import Container from "react-bootstrap/Container";
import {Button, Table} from "react-bootstrap";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";

class UnActiveUsersAdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state={
            users:[]
        }

        this.adminService = AdminService.getInstance();
    }

    refresh = async () => {
        let data = await this.adminService.validateAndGetBannedUsers();
        this.setState({
            users:data
        })
    }

    async componentDidMount() {
        this.refresh();
    }

    changeUserStatus = async (data) => {
       let response=  await this.adminService.validateAndChangeUserStatusToUnBanned(data)
        this.refresh();
    }

    render() {
        return(
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nazwa Użytkownika</th>
                        <th>Email</th>
                        <th>Rola</th>
                        <th>Wiek</th>
                        <th>Opcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(this.state.users) &&
                        this.state.users.map((user, index) => (
                            <tr key={index}>
                                <th>{user.id}</th>
                                <th>{user.username}</th>
                                <th>{user.email}</th>
                                <th>{user.role}</th>
                                <th>{user.age}</th>
                                <th>
                                    <Button
                                        variant="outline-success"
                                        onClick={() => this.changeUserStatus(user.id)}
                                    >
                                        Odblokuj
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
export default UnActiveUsersAdminPanel;