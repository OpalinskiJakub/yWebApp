import React, {Component} from "react";
import {Button, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";

class RegisterTypePanel extends Component{
    constructor() {
        super();
    }
    render() {
        const { t } = this.props;
        return(
            <Col md={{ span: 3, offset: 2 }} style={{marginTop:'10%'}}>
                <Card style={{padding:'16%'}}>
                    <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/registerPanel">
                        {t('normal')}
                    </Button>
                    <Button variant="outline-primary" style={{marginBottom:"3%"}} as={Link} to="/access/registerPanel">
                        {t('github')}
                    </Button>
                </Card>
            </Col>
        )
    }
}

export default withTranslation('registerTypePanel')(RegisterTypePanel);