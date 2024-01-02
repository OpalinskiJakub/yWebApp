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

    validateAndGetAllUsers = async () => {
        let token = await this.tokenStorage.getToken();
        let data = {
            token:token
        }
        let response = await this.userRequests.getAllUsers(data);
        return response;
    }


}
export default UserService;