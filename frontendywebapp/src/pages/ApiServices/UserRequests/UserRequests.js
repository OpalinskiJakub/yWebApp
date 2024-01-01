import axios from "axios";

import UserBuilder from "../../StorageSystem/UserPanel/Model/UserBuilder";

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

    getUserWitId = async (data) => {
        try {
            const encodedEmail = btoa(data.userId);

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
            };;
        }
    }
}

export default UserRequests;
