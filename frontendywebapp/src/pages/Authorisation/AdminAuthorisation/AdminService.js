import AdminRequests from "../../ApiServices/AdminRequests/AdminRequests";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";

class AdminService {

    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }

    constructor() {
        this.adminRequests= AdminRequests.getInstance();
        this.sessionUserStorageSystem = SessionUserStorageSystem.getInstance();
        this.tokenStorage = UnsecuredTokenStorageSystem.getInstance()
    }

    validateAndChangeUserStatusToUnBanned = async (data) => {
        let token = await this.tokenStorage.getToken();
        let request = {
            value:{
                active:true
            },
            userId:data,
            token:token,
        }
        console.log(request)

        let response = await this.adminRequests.changeUserStatus(request);
        return response;
    }


    validateAndChangeUserStatusToBanned = async (data) => {
        let token = await this.tokenStorage.getToken();
        let request = {
            value:{
                active:false
            },
            userId:data,
            token:token,
        }
        console.log(request)

        let response = await this.adminRequests.changeUserStatus(request);
        return response;
    }

    validateAndGetBannedUsers = async () => {
        let token = await this.tokenStorage.getToken();
        let request = {
            token:token,
        }

        let response = await this.adminRequests.getBannedUsers(request);
        return response;
    }

    validateAndGetAllRevocations = async () => {
        let token = await this.tokenStorage.getToken();
        let request = {
            token:token,
        }

        let response = await this.adminRequests.getAllRevocation(request);
        return response;
    }

    validateAndRemoveRevocation = async (data) => {
        let token = await this.tokenStorage.getToken();
        let request = {
            token:token,
            revocationId:data
        }

        let response = await this.adminRequests.removeRevocationById(request);
        return response;
    }


}
export default AdminService;