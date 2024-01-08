import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import AdminService from "../Authorisation/AdminAuthorisation/AdminService";
import Container from "react-bootstrap/Container";
import {withTranslation} from "react-i18next";

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
        let response=  await this.adminService.validateAndRemoveRevocation(data);
        this.refresh();
    }

    render() {
        const { t } = this.props;
        return(
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>{t('appeals.id')}</th>
                        <th>{t('appeals.email')}</th>
                        <th>{t('appeals.content')}</th>
                        <th>{t('appeals.options.title')}</th>
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
                                        {t('appeals.options.button1')}
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
export default withTranslation('adminPanel')(AppealAdminPanel);