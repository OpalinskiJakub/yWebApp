import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserApiConnector from "../../ApiServices/UserRequests/UserApiConnector";
import LoginRequests from "../../ApiServices/AutorizationRequests/LoginRequests";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";

class LoginAuthorization extends Component {
    constructor() {
        super();
        this.state = {
            auth: true,
        };
        this.connector=new LoginRequests();
        this.tokenStorage=UnsecuredTokenStorageSystem.getInstance();
    }

    checkLoginData(email){
        return true;
    }
    checkRegisterData(password){
        return true;
    }

    login  = async (email,password) => {
        if(this.checkLoginData(email)==false){
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

export default LoginAuthorization;

