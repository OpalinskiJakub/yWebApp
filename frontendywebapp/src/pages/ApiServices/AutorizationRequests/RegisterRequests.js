import axios from "axios";

class RegisterRequests{

    constructor(props) {

    }

    sendRegisterRequest = async (data) => {
        console.log(data);

        try {
            const response = await axios.post('localhost:8080/api/v1/auth/register', data);


            return {
                status:true
            };
        } catch (error) {

            return {
                status:false
            };
        }
    };
}
export default RegisterRequests;