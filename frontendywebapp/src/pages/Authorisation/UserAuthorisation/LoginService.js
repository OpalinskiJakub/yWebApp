import User from "../../StorageSystem/UserPanel/Model/User";
import LoginRequests from "../../ApiServices/AuthorisationRequests/LoginRequests";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import UserRequests from "../../ApiServices/UserRequests/UserRequests";

class LoginService{

    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }


    constructor() {
        this.connector=new LoginRequests();
        this.tokenStorage=UnsecuredTokenStorageSystem.getInstance();
        this.userStorage=new SessionUserStorageSystem();
        this.userRequests=new UserRequests();
    }
    checkLoginData(email){
        return true;
    }


    login  = async (data) => {
        if(this.checkLoginData(data)==false){
            return {
                token:'',
                status:false

            }
        }
        let response= await this.connector.sendLoginRequest(data);
        //this.tokenStorage.saveToken('Bearer '+response.token);
        console.log(response);
        let user = await this.userRequests.getUserWithEmail(response);
        console.log(user)
        //this.userStorage.saveUserToLocalStorage(user);
        return response;
    }

    logut(){

    }

    checkTokenExist = () => {

    }
}
export default LoginService;