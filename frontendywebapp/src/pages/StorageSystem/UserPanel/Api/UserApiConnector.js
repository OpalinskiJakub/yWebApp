import axios from "axios";


class UserApiConnector{
    static instance = null;
    #apiAdress='localhost:8080/api/v1/auth/authenticate';
    constructor() {
        if(UserApiConnector.instance){
           return UserApiConnector.instance;
        }
        UserApiConnector.instance=this;
    }

    async getUserFromApi(userId){
        let address = this.#apiAdress+userId;
        let response = await axios.get(address);
        return response.data;
    }

    async sendLoginRequest(email,password){
        console.log(email,password)
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
                email:email,
                password:password
            });

            console.log('Odpowiedź serwera:', response.data);
        } catch (error) {
            console.error('Błąd podczas wysyłania żądania POST1:', error);
        }
    }

}
export default UserApiConnector;