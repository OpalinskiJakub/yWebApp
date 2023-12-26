import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserApiConnector from "../../StorageSystem/UserPanel/Api/UserApiConnector";

class UserAuthorization extends Component {
    constructor() {
        super();
        this.state = {
            auth: true,
        };
        this.connector=new UserApiConnector();
    }

    login(email,password){
        console.log("usAu"+email,password)
        this.connector.sendLoginRequest(email,password);
    }

    authorize() {
        return this.state.auth ? <Outlet /> : <Navigate to="access" />;
    }

    render() {
        return <>{this.authorize()}</>;
    }
}

export default UserAuthorization;

