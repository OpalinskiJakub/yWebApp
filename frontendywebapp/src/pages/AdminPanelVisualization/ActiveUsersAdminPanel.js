import React, {Component} from "react";
import {ListGroup,Table,Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import User from "../StorageSystem/UserPanel/Model/User";
import UserRequests from "../ApiServices/UserRequests/UserRequests";
import UserService from "../Authorisation/UserAuthorisation/UserService";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";
import {withTranslation} from "react-i18next";

class ActiveUsersAdminPanel extends Component{
    constructor(props) {
        super(props);
        this.state={
            users:[]
        }

        this.userService = UserService.getInstance();
        this.adminService = AdminService.getInstance();
    }

    refresh = async () => {
        let data = await this.userService.validateAndGetAllUsers();
        this.setState({
            users:data
        })
    }

    async componentDidMount() {
        this.refresh();
    }
    changeUserStatus = async (data) => {
        let response=  await this.adminService.validateAndChangeUserStatusToBanned(data)
        this.refresh();
    }



    render() {
        const { t } = this.props;
        return(
            <Container fluid>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>{t('activeUsers.id')}</th>
                    <th>{t('activeUsers.name')}</th>
                    <th>{t('activeUsers.email')}</th>
                    <th>{t('activeUsers.role')}</th>
                    <th>{t('activeUsers.age')}</th>
                    <th>{t('activeUsers.options.title')}</th>
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
                                        variant="outline-danger"
                                        onClick={() => this.changeUserStatus(user.id)}
                                    >
                                        {t('activeUsers.options.button')}
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

export default withTranslation('adminPanel')(ActiveUsersAdminPanel);

