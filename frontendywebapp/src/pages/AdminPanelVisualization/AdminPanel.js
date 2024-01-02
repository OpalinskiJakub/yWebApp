import React, {Component} from "react";
import {Card, Nav} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import AppealAdminPanel from "./AppealAdminPanel";
import ReportsAdminPanel from "./ReportsAdminPanel";


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
                                Aktywni uzytkownicy
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel/unActiveUsers"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel/unActiveUsers")}
                            >
                                Nieaktywni uzytkownicy
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel/ReportsAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel/ReportsAdminPanel")}
                            >
                                Zgłoszenia
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel/AppealAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel/AppealAdminPanel")}
                            >
                                Odwolania
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/AdminPanel/AppealAdminPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/AdminPanel/AppealAdminPanel")}
                            >
                                Posty
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

