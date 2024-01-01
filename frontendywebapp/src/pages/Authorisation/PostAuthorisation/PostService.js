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

    checkOwner = async (ownerId) => {
        let user = await this.sessionUserStorageSystem.getUserFromLocalStorage();
        if(user.id === ownerId){
            return true;
        }else {
            return false;
        }
    }


    getAllPostPreview = async () => {
        let response = await this.postRequests.getAllPostPreview();
        return response;
    }

    getPostById = async (data) => {
        let token = this.tokenStorage.getToken();
        let request = {
            postId:data,
            token:token
        }
        let response = await this.postRequests.getPostById(request);
        console.log(response);
        return response;
    }

    validateAndEditPost = async (data) => {
        let token = this.tokenStorage.getToken();
        const request = {
            value:{
                content:data.content
            },
            postId:data.postId,
            token:token
        }
        return await this.postRequests.editPost(request)
    }

    removePost = () => {
        //this.postRequests.
    }


}
export default PostService;