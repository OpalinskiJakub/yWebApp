import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";

class AdminAuthorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth:false,
        };

        this.tokenStorage = new UnsecuredTokenStorageSystem();
        this.sessionUserStorage = SessionUserStorageSystem.getInstance();
    }

    componentDidMount() {
        let status = this.tokenStorage.isTokenValid();

        if(status==true&&this.sessionUserStorage.isAdmin()){
            if(this.state.auth!==status)
                this.setState({
                    auth:status
                })
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let status = this.tokenStorage.isTokenValid();

        if(status==true&&this.sessionUserStorage.isAdmin()){
            if(this.state.auth!==status)
                this.setState({
                    auth:status
                })
        }

    }



    render() {
        return <>{this.state.auth ? <Outlet /> : null }</>;
    }
}

export default AdminAuthorization;
