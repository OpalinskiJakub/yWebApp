import {Component} from "react";
import axios from "axios";
import UserBuilder from "../../StorageSystem/UserPanel/Model/UserBuilder";
import RevocationBuilder from "../../StorageSystem/UserPanel/Model/RevocationBuilder";
import PostPreviewBuilder from "../../StorageSystem/PostPanel/Model/PostPreviewBuilder";


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

    getAllRevocation = async (data) => {
        try {

            const response = await axios.get(`http://localhost:8080/api/v1/tokenmang/revocation`,
                {
                    headers: {
                        'Authorization': data.token,
                    },
                });

            let revocationArray = []
            response.data.forEach(revocation => {
                let revocationInstance = RevocationBuilder.builder()
                    .setId(revocation.id)
                    .setEmail(revocation.email)
                    .setContent(revocation.content)
                    .build()

                revocationArray.push(revocationInstance);
            });

            return revocationArray;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    removeRevocationById = async (data) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/tokenmang/revocation/${data.revocationId}`,

                {
                    headers: {
                        'Authorization': data.token,
                    },
                });


            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }



    getAllReportedPosts = async (data) => {

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/tokenmang/post/reported`,
            {
                headers: {
                    'Authorization': data.token,
                },
            });

            let postPreviewArray = []
            response.data.forEach(postData => {
                const postPreview = PostPreviewBuilder.Builder()
                    .setId(postData.id)
                    .setOwnerId(postData.ownerId)
                    .setOwnerName(postData.ownerName)
                    .setTitle(postData.title)
                    .setUpvote(postData.upvote)
                    .build();

                postPreviewArray.push(postPreview);
            });

            return postPreviewArray;
        } catch (error) {


            return false;
        }
    }

    unReportPostById = async (data) => {
        try {
            const response = await axios.patch(`http://localhost:8080/api/v1/tokenmang/post/${data.postId}/report/undo`,
                {},{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': data.token,
                    },
                });

            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

}
export default AdminRequests;