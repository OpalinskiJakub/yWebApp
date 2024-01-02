import {Component} from "react";
import axios from "axios";
import UserBuilder from "../../StorageSystem/UserPanel/Model/UserBuilder";


class AdminRequests {

    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }
    constructor() {

    }

    getBannedUsers = async (data) => {
            try {

                const response = await axios.get(`http://localhost:8080/api/v1/tokenmang/user/banned`,
                    {
                        headers: {
                            'Authorization': data.token,
                        },
                    });

                let userArray = []
                response.data.forEach(user => {
                    let sesseionUser = UserBuilder.Builder()
                        .setId(user.id)
                        .setEmail(user.email)
                        .setUsername(user.username)
                        .setDescription(user.description)
                        .setRole(user.role)
                        .setAge(user.age)
                        .setActive(user.active)
                        .setAvatarURL(user.avatarUrl)
                        .build();

                    userArray.push(sesseionUser);
                });

                return userArray;
            } catch (error) {
                console.log(error)
                return false;
            }
    }

    changeUserStatus = async (data) => {
        try {

            const response = await axios.patch(`http://localhost:8080/api/v1/tokenmang/user/${data.userId}`,
                data.value,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': data.token,
                    },
                });


            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }



}
export default AdminRequests;