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

    validateGetExpectedPostsByName = async (data) => {
        let token = await this.tokenStorage.getToken();
        let decodedData = atob(data);
        console.log(decodedData)
        let request = {
            value:{
                title:decodedData
            },
            token:token,
        }
        let response = await this.postRequests.getExpectedPostsByName(request);
        return response;
    }

    checkCommentOwner = (ownerId) => {
        let user = this.sessionUserStorageSystem.getUserFromLocalStorage()
        if(user.id===ownerId){
            return true;
        }else {
            return false;
        }
    }



    checkVoteState = async (data) => {
        let user = await this.sessionUserStorageSystem. getUserFromLocalStorage();
        if(data.includes(user.id)){
            return true;
        }else {
            return false;
        }
    }
    validateAndSendPost = async (data) => {

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

    validateAndRemovePost = async (data) => {
        let token = await this.tokenStorage.getToken();
        const request = {
            postId:data,
            token:token
        }
        return await this.postRequests.removePostById(request);

    }

    validateAndAddVote = async (data) => {
        let token = await this.tokenStorage.getToken();
        let user = await this.sessionUserStorageSystem.getUserFromLocalStorage();
        const request = {
            postId:data,
            token:token,
            userId:user.id,
        }
        return await this.postRequests.AddVoteById(request);
    }
    validateAndSendComment = async (data) => {
        let token = await this.tokenStorage.getToken();
        let user = await this.sessionUserStorageSystem.getUserFromLocalStorage();
        const request = {
            value:{
                ownerId:user.id,
                ownerName:user.username,
                content:data.content,
            },
            postId:data.postId,
            token:token,
        }
        return await this.postRequests.addCommentToPost(request);
    }

    addReplyComment = async (data) => {
        let token = await this.tokenStorage.getToken();
        let user = await this.sessionUserStorageSystem.getUserFromLocalStorage();
        const request = {
            value:{
                ownerId:user.id,
                ownerName:user.username,
                content:data.content,
            },
            postId:data.commentId,
            token:token,
        }
        return await this.postRequests.addCommentToPost(request);
    }



    validateAndAddCommentVote = async (commentId) => {
        let token = await this.tokenStorage.getToken();
        let user = await this.sessionUserStorageSystem.getUserFromLocalStorage();
        const request = {
            userId:user.id,
            commentId:commentId,
            token:token,
        }
        return await this.postRequests.addVoteCommentById(request);
    }

    validateAndRemoveComment = async (data) => {
        let token = await this.tokenStorage.getToken();
        const request = {
            commentId:data,
            token:token
        }
        return await this.postRequests.removeCommentById(request);
    }



}
export default PostService;