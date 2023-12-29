import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserRequests from "../../ApiServices/UserRequests/UserRequests";
import LoginRequests from "../../ApiServices/AuthorisationRequests/LoginRequests";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import User from "../../StorageSystem/UserPanel/Model/User";
class UserAuthorization extends Component {
    constructor() {
        super();
        this.state = {
            auth: false,
        };
    }

    allowUser=()=>{
        this.setState({
            auth: true,
        });
    }

    notAllowUser=()=>{
        this.setState({
            auth: false,
        });
    }

    render() {
        return <>{this.state.auth ? <Outlet /> : <Navigate to="access" />}</>;
    }
}

export default UserAuthorization;

