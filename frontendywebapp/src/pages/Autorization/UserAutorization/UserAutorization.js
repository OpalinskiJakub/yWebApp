import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserApiConnector from "../../ApiServices/UserRequests/UserApiConnector";
import LoginRequests from "../../ApiServices/AutorizationRequests/LoginRequests";

class UserAuthorization extends Component {
    constructor() {
        super();
        this.state = {
            auth: true,
        };
        this.connector=new LoginRequests();
    }

    login=(email,password)=>{
         return this.connector.sendLoginRequest(email,password);
    }

    authorize=()=>{
        return this.state.auth ? <Outlet /> : <Navigate to="access" />;
    }

    render() {
        return <>{this.authorize()}</>;
    }
}

export default UserAuthorization;

