import axios from "axios";


class UserApiConnector{
    static instance = null;
    #apiAdress='https://dfed38ed-4ef9-40df-8899-443c3275de54.mock.pstmn.io/users/';
    constructor() {
        //if(UserApiConnector.instance){
       //    return UserApiConnector.instance;
       // }
        UserApiConnector.instance=this;
    }

    async getUserFromApi(userId){
        let address = this.#apiAdress+userId;
        let response = await axios.get(address);
        return response.data;
    }

}
export default UserApiConnector;