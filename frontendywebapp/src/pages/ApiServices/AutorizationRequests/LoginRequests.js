import axios from 'axios';

class LoginRequests {
    sendLoginRequest = async (email, password) => {
        console.log(email, password);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
                email: email,
                password: password
            });


                return true;
        } catch (error) {
            if (error.response.status == '403') {
                console.log(error.response.status);
            } else {
                console.error("blad wyslania:", error);
            }
            return false;
        }
    };
}

export default LoginRequests;
