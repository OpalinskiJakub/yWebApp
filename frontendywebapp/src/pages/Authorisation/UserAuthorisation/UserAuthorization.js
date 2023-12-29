import React, { Component } from "react";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import UserRequests from "../../ApiServices/UserRequests/UserRequests";
import LoginRequests from "../../ApiServices/AuthorisationRequests/LoginRequests";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import User from "../../StorageSystem/UserPanel/Model/User";
import PostPanel from "../../PostPanelVisualization/PostPanel";
import MainPagePostsWizualization from "../../MainPanel/MainPagePostsWizualization";
class UserAuthorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth:false,
        };

        this.tokenStorage = new UnsecuredTokenStorageSystem();
    }

    componentDidMount() {
        let status = this.tokenStorage.isTokenValid();
        if(this.state.auth!==status)
        this.setState({
            auth:status
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let status = this.tokenStorage.isTokenValid();
        if(this.state.auth!==status)
            this.setState({
                auth:status
            })

    }

    render() {
        return <>{this.state.auth ? <Outlet /> :<MainPagePostsWizualization/>}</>;
    }
}

export default UserAuthorization;

