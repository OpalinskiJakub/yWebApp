import axios from "axios";
import React from "react";
import PostIndexDB from "../../StorageSystem/PostPanel/PostIndexDB";
import UserBuilder from "../../StorageSystem/UserPanel/Model/UserBuilder";



class PostRequests {

    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }

    constructor() {
    }

    sendPost = async (data) => {
        try {

            const response = await axios.post(`http://localhost:8080/api/v1/tokenmang/post`,
                data.post,
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

    getAllPosts = async (data) => {
        try {


            const response = await axios.get(`http://localhost:8080/api/v1/public/post`, {
                headers: {
                    Authorization:data.token,
                },
            });
                console.log(response+"Tutaj");
            return response.data;
        } catch (error) {
            console.log("TutajE");

            return false;
        }
    }


}

export default PostRequests;
