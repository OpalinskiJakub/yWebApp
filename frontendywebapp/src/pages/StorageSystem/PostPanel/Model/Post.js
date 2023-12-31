class Post{
    constructor(id,ownerId,ownerName,title,content,upvote,reported,systemCommentList,upvoteUserId) {

        this._id = id;
        this._ownerId = ownerId;
        this._ownerName = ownerName;
        this._title = title;
        this._content = content;
        this._upvote = upvote;
        this._reported = reported;
        this._systemCommentList = systemCommentList;
        this._upvoteUserId = upvoteUserId;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get ownerId() {
        return this._ownerId;
    }

    set ownerId(value) {
        this._ownerId = value;
    }

    get ownerName() {
        return this._ownerName;
    }

    set ownerName(value) {
        this._ownerName = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    get upvote() {
        return this._upvote;
    }

    set upvote(value) {
        this._upvote = value;
    }

    get reported() {
        return this._reported;
    }

    set reported(value) {
        this._reported = value;
    }

    get systemCommentList() {
        return this._systemCommentList;
    }

    set systemCommentList(value) {
        this._systemCommentList = value;
    }

    get upvoteUserId() {
        return this._upvoteUserId;
    }

    set upvoteUserId(value) {
        this._upvoteUserId = value;
    }
}
export default Post;