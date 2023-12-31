import axios from "axios";
import React from "react";
import PostIndexDB from "../../StorageSystem/PostPanel/PostIndexDB";
import UserBuilder from "../../StorageSystem/UserPanel/Model/UserBuilder";
import comment from "../../StorageSystem/PostPanel/Model/Comment";



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

    getAllPostPreview = async (data) => {
        try {


            const response = await axios.get(`http://localhost:8080/api/v1/public/post`);

            return response.data;
        } catch (error) {


            return false;
        }
    }

    getPostById = async (data) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/tokenmang/post/${data.postId}`, {
                headers: {
                    Authorization:data.token,
                },
            });
            console.log(response);

            return response.data;
        } catch (error) {


            return false;
        }
    }


}

export default PostRequests;
