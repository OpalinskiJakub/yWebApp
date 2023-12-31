import Post from "./Post";
class PostBuilder {
    constructor() {
        this.post = new Post(
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            [],
            []
        );
    }

    setId = (id) => {
        this.post.id = id;
        return this;
    }

    setOwnerId = (ownerId) => {
        this.post.ownerId = ownerId;
        return this;
    }

    setOwnerName = (ownerName) => {
        this.post.ownerName = ownerName;
        return this;
    }

    setTitle = (title) => {
        this.post.title = title;
        return this;
    }

    setContent = (content) => {
        this.post.content = content;
        return this;
    }

    setUpvote = (upvote) => {
        this.post.upvote = upvote;
        return this;
    }

    setReported = (reported) => {
        this.post.reported = reported;
        return this;
    }

    setSystemCommentList = (systemCommentList) => {
        if(systemCommentList===undefined||systemCommentList===null){
            this.post.systemCommentList = [];
        }else {
            this.post.systemCommentList = systemCommentList;
        }

        return this;
    }

    setUpvoteUserId = (upvoteUserId) => {
        this.post.upvoteUserId = upvoteUserId;
        return this;
    }

    static Builder = () => {
        return new PostBuilder();
    };

    build = () => {
        return this.post;
    }
}
export default PostBuilder;