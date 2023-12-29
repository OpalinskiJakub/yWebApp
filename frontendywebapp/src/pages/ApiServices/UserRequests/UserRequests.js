import axios from "axios";

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

            const response = await axios.get("http://localhost:8080/api/v1/tokenmang/user/email", {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJlazIxMTRAb3AucGwiLCJpYXQiOjE3MDM3OTc1ODcsImV4cCI6MTcwMzg4Mzk4N30.NDhd1PcrHi3U1UIK1KzSZWjPLVMaYAYUJhEsBGVjDkc',
                },
            });

            console.log(response.data);
            return 'DAJE';
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default UserRequests;
