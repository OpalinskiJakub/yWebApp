import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import UserService from "../UserAuthorisation/UserService";

class AdminAuthorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth:false,
        };

        this.userService = UserService.getInstance();
    }

    async componentDidMount() {
        let response = await this.userService.checkIsAdmin();
        if(response===true){
            this.setState({
                auth:true
            });
        }else {
            this.setState({
                auth:false
            });
        }

    }





    render() {
        return <>{this.state.auth ? <Outlet /> : null }</>;
    }
}

export default AdminAuthorization;
