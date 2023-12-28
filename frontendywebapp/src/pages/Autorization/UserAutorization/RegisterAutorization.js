import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserApiConnector from "../../ApiServices/UserRequests/UserApiConnector";
import LoginRequests from "../../ApiServices/AutorizationRequests/LoginRequests";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import RegisterRequests from "../../ApiServices/AutorizationRequests/RegisterRequests";

class RegisterAutorization {
    constructor() {
        this.connector=new RegisterRequests();
    }

    checkRegisterData(password){
        return true;
    }


    autoarizeRegister = async (data)=> {
        if(this.checkRegisterData(data)===false){
            return false;
        }
        console.log(data);
        let response = await this.connector.sendRegisterRequest(data);
        return response;
    }



    
}

export default RegisterAutorization;

