import UserRequests from "../../ApiServices/UserRequests/UserRequests";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";

class UserService {

    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }


    constructor() {
        this.userRequests = new UserRequests();
        this.sessionUserStorageSystem = SessionUserStorageSystem.getInstance();
        this.tokenStorage = UnsecuredTokenStorageSystem.getInstance();
    }
    checkIsAdmin = async () => {
        let user = await this.sessionUserStorageSystem.getUserFromLocalStorage();
        if(user.role==='ADMIN'){
            return true;
        }else {
            return false;
        }
    }


    validateAndGetAllUsers = async () => {
        let token = await this.tokenStorage.getToken();
        let data = {
            token:token
        }
        let response = await this.userRequests.getAllUsers(data);
        return response;
    }

    validateAndSendRevocation = async (data) => {
        let response= await this.userRequests.sendRevocation(data);
        return response;
    }

    validateAndGetUser = async (data) =>{
        let token = await this.tokenStorage.getToken();
        let userData = {
            token:token,
            id:data
        }
        let response = await this.userRequests.getUserById(userData);
        return response;
    }


}
export default UserService;