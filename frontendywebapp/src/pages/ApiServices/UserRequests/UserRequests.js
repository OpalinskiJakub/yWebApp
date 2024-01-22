import axios from "axios";

import UserBuilder from "../../StorageSystem/UserPanel/Model/UserBuilder";
import PostPreviewBuilder from "../../StorageSystem/PostPanel/Model/PostPreviewBuilder";

class UserRequests {
    static instance = null;
    #apiAddress = 'http://localhost:8080/api/v1/auth/authenticate';

    constructor() {
        if (!UserRequests.instance) {
            UserRequests.instance = this;
        }
        return UserRequests.instance;
    }

    getUserWithEmail = async (data) => {
        try {
            const encodedEmail = btoa(data.email);

            const response = await axios.get(`http://localhost:8080/api/v1/tokenmang/user/email/${encodedEmail}`, {
                headers: {
                    Authorization:data.token,
                },
            });

            let sesseionUser = UserBuilder.Builder()
                .setId(response.data.id)
                .setEmail(response.data.email)
                .setUsername(response.data.username)
                .setDescription(response.data.description)
                .setRole(response.data.role)
                .setAge(response.data.age)
                .setAvatarURL(response.data.avatarUrl)
                .build();

            return sesseionUser;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    getUserById = async (data) => {
        try {


            const response = await axios.get(`http://localhost:8080/api/v1/tokenmang/user/${data.id}`, {
                headers: {
                    Authorization:data.token,
                },
            });

            let user = UserBuilder.Builder()
                .setId(response.data.id)
                .setEmail(response.data.email)
                .setUsername(response.data.username)
                .setDescription(response.data.description)
                .setRole(response.data.role)
                .setAge(response.data.age)
                .setAvatarURL(response.data.avatarUrl)
                .build();

            return user;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

     async changeUserDataById(data){
        try {

            const response = await axios.patch(`http://localhost:8080/api/v1/tokenmang/user/${data.id}`,
                data.value,
                {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': data.token,
                },
            });


            let sesseionUser = UserBuilder.Builder()
                .setId(response.data.id)
                .setEmail(response.data.email)
                .setUsername(response.data.username)
                .setDescription(response.data.description)
                .setRole(response.data.role)
                .setAge(response.data.age)
                .setAvatarURL(response.data.avatarUrl)
                .build();

            return {
                user:sesseionUser,
                status:true
            };
        } catch (error) {
            console.log(error)
            return {
                user:null,
                status:false
            };
        }
    }


    getAllUsers  = async (data) => {
        try {

            const response = await axios.get(`http://localhost:8080/api/v1/tokenmang/user`,
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

    sendRevocation = async (data) =>{
            try {
                console.log(data)
                const response = await axios.post(`http://localhost:8080/api/v1/public/revocation`,
                    data,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                return true
            } catch (error) {
                console.log(error)
                return false;
            }


    }


    }

export default UserRequests;
