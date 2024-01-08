import React, {Component} from "react";
import UserService from "../Authorisation/UserAuthorisation/UserService";
import Container from "react-bootstrap/Container";
import {Button, Table} from "react-bootstrap";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";
import {withTranslation} from "react-i18next";

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
        const { t } = this.props;
        return(
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>{t('inactiveUsers.id')}</th>
                        <th>{t('inactiveUsers.name')}</th>
                        <th>{t('inactiveUsers.email')}</th>
                        <th>{t('inactiveUsers.role')}</th>
                        <th>{t('inactiveUsers.age')}</th>
                        <th>{t('inactiveUsers.options.title')}</th>
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
                                        {t('inactiveUsers.options.button')}
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
export default withTranslation('adminPanel')(UnActiveUsersAdminPanel);