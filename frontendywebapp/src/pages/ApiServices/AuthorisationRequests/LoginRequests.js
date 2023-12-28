import axios from 'axios';

class LoginRequests {

    sendLoginRequest = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', data);


                return {
                    email:data.email,
                    token:response.data.access_token,
                    status:true
                }
        } catch (error) {

            return {
                token:'',
                status:false
            }
        }
    };
}

export default LoginRequests;
