import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

class AdminAuthorization extends Component {
    constructor() {
        super();
        this.state = {
            auth: false,
        };
    }


    authorize() {
        return this.state.auth ? <Outlet /> : <Navigate to="access" />;
    }

    render() {
        return <>{this.authorize()}</>;
    }
}

export default AdminAuthorization;
