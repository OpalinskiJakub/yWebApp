import PostRequests from "../../ApiServices/PostRequests/PostRequests";
import SessionUserStorageSystem from "../../StorageSystem/UserStorageSystem/SessionUserStorageSystem";

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
    }
    validateAndSendPost = async (data) => {
        let user = await this.sessionUserStorageSystem. getUserFromLocalStorage();
        let post = {
            ownerId:user.id,
            ownerName:user.username,
            content:data.content,
            title:data.title
        }
        let response = await this.postRequests.getAllPosts();
        return response;
    }



}
export default PostService;