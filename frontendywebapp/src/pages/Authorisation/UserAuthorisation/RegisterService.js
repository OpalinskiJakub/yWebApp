import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserApiConnector from "../../ApiServices/UserRequests/UserApiConnector";
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



    
}

export default RegisterService;

