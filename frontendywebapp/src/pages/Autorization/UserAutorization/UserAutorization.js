import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserApiConnector from "../../ApiServices/UserRequests/UserApiConnector";
import LoginRequests from "../../ApiServices/AutorizationRequests/LoginRequests";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";

class UserAuthorization extends Component {
    constructor() {
        super();
        this.state = {
            auth: true,
        };
        this.connector=new LoginRequests();
        this.tokenStorage=UnsecuredTokenStorageSystem.getInstance();
    }

    checkEmail(email){
        return true;
    }
    checkPassword(password){
        return true;
    }

    login  = async (email,password) => {
        if((this.checkEmail(email)===false)||(this.checkPassword(password)===false)){
            return {
                token:'',
                status:false

            }
        }
        let response= await this.connector.sendLoginRequest(email,password);
        console.log('Bearer '+response.token)
        this.tokenStorage.saveToken('Bearer '+response.token);
        return response;
    }

    savetoken = (token) =>{
        this.tokenStorage.saveToken(token);
    }

    authorize=()=>{
        return this.state.auth ? <Outlet /> : <Navigate to="access" />;
    }

    render() {
        return <>{this.authorize()}</>;
    }
}

export default UserAuthorization;

