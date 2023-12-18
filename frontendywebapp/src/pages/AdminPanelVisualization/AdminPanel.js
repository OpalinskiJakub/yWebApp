import React, {Component} from "react";
import {Card, Nav} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import AppealAdminPanel from "./AppealAdminPanel";
import ReportAdminPanel from "./ReportAdminPanel";


class AdminPanel extends Component{
    constructor() {
        super();
        this.state={
            activeTab:'/AdminPanel'
        }
    }

    handleTabChange = (selectedTab) => {
        this.setState({ activeTab: selectedTab });
    };


    render() {
        return(
            <Card className="mx-auto" style={{ width: "80%", margin: "10px" }}>
                <Card.Header>
                    <Nav variant="tabs" activeKey={this.state.activeTab}>
                        <Nav.Item>
                            <Link
                                to="/AdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/AdminPanel")}
                            >
                                Panel użytkowników
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/AdminPanel/PostsAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/AdminPanel/PostsAdminPanel")}
                            >
                                Panel postów
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/AdminPanel/CommentsAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/AdminPanel/CommentsAdminPanel")}
                            >
                                Panel komentarzy
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/AdminPanel/ReportAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/AdminPanel/ReportAdminPanel")}
                            >
                                Panel zgłoszeń
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/AdminPanel/AppealAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/AdminPanel/AppealAdminPanel")}
                            >
                                Panel odwołań
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
export default AdminPanel;

