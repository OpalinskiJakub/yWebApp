import React, {Component} from "react";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import LoginPanel from "./LoginPanel";
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
class AccessPanel extends Component{
    constructor() {
        super();

    }

    render() {
        const { t } = this.props;
        return(
            <Col md={{ span: 3, offset: 2 }} style={{marginTop:'8%'}}>
            <Card style={{padding:'16%'}}>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/LoginPanel">
                    {t('message')}
                </Button>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/registerType">
                    Zarejstruj sie
                </Button>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/preview">
                    Przejdz do Y
                </Button>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/AppealForm">
                    Formularz odwolania
                </Button>
            </Card>
                </Col>
        )
    }
}

export default withTranslation()(AccessPanel);