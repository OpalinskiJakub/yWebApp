import PostRequests from "../../ApiServices/PostRequests/PostRequests";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";
import UnsecuredTokenStorageSystem from "../../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";

class PostService{

    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }

    constructor() {
        this.postRequests = PostRequests.getInstance();
        this.sessionUserStorageSystem = SessionUserStorageSystem.getInstance();
        this.tokenStorage = UnsecuredTokenStorageSystem.getInstance();
    }
    validateAndSendPost = async (data) => {
        console.log(data)
        let user = await this.sessionUserStorageSystem. getUserFromLocalStorage();
        let token = await this.tokenStorage.getToken();
        let request = {
            post: {
                ownerId: user.id,
                ownerName: user.username,
                content: data.content,
                title: data.title
            },
            token:token
        }
        console.log(request)
        let response = await this.postRequests.sendPost(request);
        return response;
    }



}
export default PostService;