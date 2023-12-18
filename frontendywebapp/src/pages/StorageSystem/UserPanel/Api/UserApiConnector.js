import axios from "axios";


class UserApiConnector{
    static instance = null;
    #apiAdress='';
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