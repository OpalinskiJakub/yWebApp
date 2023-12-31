import React, { Component } from "react";
import { Card, Nav } from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import {withTranslation} from "react-i18next";

class UserPanel extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: "/home/UserPanel",
        };
    }

    handleTabChange = (selectedTab) => {
        this.setState({ activeTab: selectedTab });
    };

    render() {
        const { activeTab } = this.state;
        const { t } = this.props;

        return (
            <Card className="mx-auto" style={{ width: "80%", margin: "10px" }}>
                <Card.Header>
                    <Nav variant="tabs" activeKey={activeTab}>
                        <Nav.Item>
                            <Link
                                to="/home/UserPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/UserPanel")}
                            >
                                {t('yourData')}
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link
                                to="/home/UserPanel/UserDataEditPanel"
                                className="nav-link"
                                onClick={() => this.handleTabChange("/home/UserPanel/UserDataEditPanel")}
                            >
                                {t('changeData')}
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

export default withTranslation('userPanel')(UserPanel);