import React, {Component} from "react";
import {Card, Nav} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";


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
                                Panel aktywnych użytkowników
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/UserPanel/UserDataEditPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/UserPanel/UserDataEditPanel")}
                            >
                                Panel dezaktywowanych użytkowników
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/UserPanel/UserDataEditPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/UserPanel/UserDataEditPanel")}
                            >
                                Panel zgłoszeń
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

