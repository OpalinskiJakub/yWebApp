import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";
import Container from "react-bootstrap/Container";

class AppealAdminPanel extends Component{
    constructor(props) {
        super(props);
        this.state={
            revocations:[]
        }

        this.adminService = AdminService.getInstance();
    }

    refresh = async () => {
        let data = await this.adminService.validateAndGetAllRevocations();
        this.setState({
            revocations:data
        })
    }

    async componentDidMount() {
        this.refresh();
    }

    changeRevocationStatus = async (data) => {
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
                        <th>Email</th>
                        <th>Opis</th>
                        <th>Opcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(this.state.revocations) &&
                        this.state.revocations.map((revocation, index) => (
                            <tr key={index}>
                                <th>{revocation.id}</th>
                                <th>{revocation.email}</th>
                                <th>{revocation.content}</th>
                                <th>
                                    <Button
                                        variant="outline-success"
                                        onClick={() => this.changeRevocationStatus(revocation.id)}
                                    >
                                        Usun
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
export default AppealAdminPanel;