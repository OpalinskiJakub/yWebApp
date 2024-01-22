import React, {Component} from "react";
import {Button, Card, Col, DropdownButton, Dropdown, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import LoginPanel from "./LoginPanel";
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import i18n from "i18next";
class AccessPanel extends Component{
    constructor() {
        super();

    }

    changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('selectedLanguage', lng);
    };

    render() {
        const { t } = this.props;

        return(
            <Col md={{ span: 3, offset: 2 }} style={{marginTop:'5%'}}>
            <Card style={{padding:'16%'}}>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/LoginPanel">
                    {t('login')}
                </Button>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/registerPanel">
                    {t('register')}
                </Button>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/preview">
                    {t('preview')}
                </Button>
                <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/AppealForm">
                    {t('appeal')}
                </Button>
                <DropdownButton
                    variant="outline-primary"
                    as={ButtonGroup}
                    title={t('lang.title')}
                    id="bg-vertical-dropdown-1"
                >
                    <Dropdown.Item eventKey="1" onClick={() => this.changeLanguage('en')}>
                        {t('lang.en')}
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={() => this.changeLanguage('pol')}>
                        {t('lang.pol')}
                    </Dropdown.Item>

                </DropdownButton>

            </Card>
                </Col>
        )
    }
}

export default withTranslation('accesPanel')(AccessPanel);