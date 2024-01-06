import { Outlet, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import {Badge,Button,Dropdown,Form,Offcanvas} from "react-bootstrap";
import React, {Component} from "react";
import UserPanel from "../UserPanelVisualization/UserPanel";
import UnsecuredTokenStorageSystem from "../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import UserService from "../Authorisation/UserAuthorisation/UserService";
import i18n from "i18next";
import {withTranslation} from "react-i18next";

class Home extends Component{
    constructor() {
        super();
        this.tokenStorage = new UnsecuredTokenStorageSystem();
        this.state = {
            encodedSearchValue:'',
            searchValue:'',
            isAdmin:false
        }

        this.userService = UserService.getInstance();
    }

    async componentDidMount() {
        let response =await this.userService.checkIsAdmin();
        this.setState({
            isAdmin:response
        })
    }

    close = () => {
        this.tokenStorage.removeToken();
    }

    handleInputChange = (event) => {
        const {value} = event.target;
        let encodedValue = btoa(value);
        this.setState({
            encodedSearchValue:encodedValue,
            searchValue:value
        })
        console.log(encodedValue);
    };

    changeLanguage = (lng) => {
        console.log(lng)
        i18n.changeLanguage(lng);
        localStorage.setItem('selectedLanguage', lng);
    };
    render() {
        const { t } = this.props;
        return (


            <div data-bs-theme="dark" sticky="top">
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
                        <Container fluid>
                            <Navbar.Brand href="/home">
                                <Badge variant="dark" style={{width:"50px", height:"37px"}}>
                                    <h4 style={{ color: "black", fontFamily: "sans-serif" }}>Y</h4>
                                </Badge>
                            </Navbar.Brand>
                            <div style={{width:"50%"}}>
                                <Form className="d-flex">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder={t('searchForm.description')}
                                        aria-label="Wyszukaj"
                                        name="searchValue"
                                        value={this.state.searchValue}
                                        onChange={this.handleInputChange}
                                    />
                                    <Button variant="outline-primary"
                                        href={`/home/search/${this.state.encodedSearchValue}`}
                                    >
                                        {t('searchForm.button')}
                                    </Button>
                                </Form>
                            </div>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                                data-bs-theme="dark"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        {t('navbar.title')}
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body data-bs-theme="dark">
                                    <Nav className="justify-content-end flex-grow-1 pe-3" data-bs-theme="dark">
                                        <Nav.Link href="/home/UserPanel">{t('navbar.userData')}</Nav.Link>
                                        <Nav.Link href="/home/postCreator">{t('navbar.createPost')}</Nav.Link>
                                        <Nav.Link href="/home/userPosts">{t('navbar.yourPosts')}</Nav.Link>
                                        {this.state.isAdmin ?
                                            <Nav.Link href="/home/AdminPanel">{t('navbar.title')}</Nav.Link>
                                            : null}

                                        <Nav.Link href="/access" onClick={this.close}>
                                            {t('navbar.logout')}
                                        </Nav.Link>
                                        <NavDropdown
                                            title={t('navbar.lang.title')}
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item
                                            onClick={() => this.changeLanguage('en')}
                                            >
                                                {t('navbar.lang.en')}
                                            </NavDropdown.Item>
                                            <NavDropdown.Item
                                                onClick={() => this.changeLanguage('pol')}
                                            >
                                                {t('navbar.lang.pol')}
                                            </NavDropdown.Item>

                                        </NavDropdown>
                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>

                ))}
                <Outlet />
            </div>
        );
    }


}

export default withTranslation('home')(Home);


