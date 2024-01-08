import React, {Component} from "react";
import {Card, Nav} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import AppealAdminPanel from "./AppealAdminPanel";
import ReportsAdminPanel from "./ReportsAdminPanel";
import {withTranslation} from "react-i18next";


class AdminPanel extends Component{
    constructor() {
        super();
        this.state={
            activeTab:'/home/AdminPanel'
        }
    }

    handleTabChange = (selectedTab) => {
        this.setState({ activeTab: selectedTab });
    };


    render() {
        const { t } = this.props;
        return(
            <Card className="mx-auto" style={{ width: "80%", margin: "10px" }}>
                <Card.Header>
                    <Nav variant="tabs" activeKey={this.state.activeTab}>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel")}
                            >
                                {t('activeUsers.title')}
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel/unActiveUsers"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel/unActiveUsers")}
                            >
                                {t('inactiveUsers.title')}
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel/ReportsAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel/ReportsAdminPanel")}
                            >
                                {t('reports.title')}
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel/AppealAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel/AppealAdminPanel")}
                            >
                                {t('appeals.title')}
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel/postsAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel/postsAdminPanel")}
                            >
                                {t('adminPosts.title')}
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Outlet/>
                </Card.Body>
            </Card>
        );

    }
}
export default withTranslation('adminPanel')(AdminPanel);

