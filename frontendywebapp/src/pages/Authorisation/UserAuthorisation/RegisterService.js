import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserRequests from "../../ApiServices/UserRequests/UserRequests";
import LoginRequests from "../../ApiServices/AuthorisationRequests/LoginRequests";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import RegisterRequests from "../../ApiServices/AuthorisationRequests/RegisterRequests";

class RegisterService {
    constructor() {
        this.connector=new RegisterRequests();
    }

    checkRegisterData(password){
        return true;
    }


    authoriseRegister = async (data)=> {
        if(this.checkRegisterData(data)===false){
            return false;
        }
        let response = await this.connector.sendRegisterRequest(data);
        return response;
    }

    getDataFromGithub = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramValue = urlParams.get('code');
        if(paramValue!=null){
            console.log(paramValue);
            let response= await this.connector.sendRequestToGithub(paramValue)
            const userData={
                username:response.username,
                description:response.description
            }
            return userData;
        }



    }



    
}

export default RegisterService;

