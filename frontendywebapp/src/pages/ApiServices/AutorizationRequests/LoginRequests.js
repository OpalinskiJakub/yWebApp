import axios from 'axios';

class LoginRequests {

    sendLoginRequest = async (email, password) => {
        console.log(email, password);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
                email: email,
                password: password
            });


                return {
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
