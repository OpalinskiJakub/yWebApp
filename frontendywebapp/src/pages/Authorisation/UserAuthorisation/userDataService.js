import UserRequests from "../../ApiServices/UserRequests/UserRequests";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";

class UserDataService{


    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }

    constructor() {
        this.userRequest = new UserRequests();
        this.tokenSorage = UnsecuredTokenStorageSystem.getInstance();
        this.userStorage = SessionUserStorageSystem.getInstance();
    }

    validateEmail = async (newEmail) => {
        const token = this.tokenSorage.getToken();
        const user = this.userStorage.getUserFromLocalStorage();
        const data = {
            value: {
                email:newEmail
            },
            token:token,
            id:user.id
        }
        const response = await this.userRequest.changeUserDataById(data);
        if(response.status===true){
            await this.tokenSorage.removeToken()
        }
        if(response.status===false){
            return false;
        }
        return true;
    }

    validateAndSendUsername = async (newUsername) => {
        const token = this.tokenSorage.getToken();
        const user = this.userStorage.getUserFromLocalStorage();
        const data = {
            value:{
                username:newUsername
            },
            token:token,
            id:user.id
        }
        const response = await this.userRequest.changeUserDataById(data);
        if(response.status===false){
           return false;
        }
        await this.userStorage.saveUserToLocalStorage(response.user);
        return true;
    }

    validateAndSendDescription = async (newDescription) => {
        const token = this.tokenSorage.getToken();
        const user = this.userStorage.getUserFromLocalStorage();
        const data = {
            value:{
                description:newDescription
            },
            token:token,
            id:user.id
        }
        const response = await this.userRequest.changeUserDataById(data);
        if(response.status===false){
            return false;
        }
        await this.userStorage.saveUserToLocalStorage(response.user);
        return true;
    }



}
export default UserDataService;