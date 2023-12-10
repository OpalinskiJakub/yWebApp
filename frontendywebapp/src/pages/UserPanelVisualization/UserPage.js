import React, { Component } from "react";
import { Card, Nav } from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";

class UserPage extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: "/UserPage",
        };
    }

    handleTabChange = (selectedTab) => {
        this.setState({ activeTab: selectedTab });
    };

    render() {
        const { activeTab } = this.state;

        return (
            <Card className="mx-auto" style={{ width: "80%", margin: "10px" }}>
                <Card.Header>
                    <Nav variant="tabs" activeKey={activeTab}>
                        <Nav.Item>
                            <Link
                                to="/UserPage"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/UserPage")}
                            >
                                Twoje Dane
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/UserPage/UserDataEditPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/UserPage/UserDataEditPanel")}
                            >
                                Zmień dane
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

export default UserPage;