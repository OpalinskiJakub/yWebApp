class PostPreview {
    constructor(id, ownerId, ownerName, title, upvote) {
        this._id = id;
        this._ownerId = ownerId;
        this._ownerName = ownerName;
        this._title = title;
        this._upvote = upvote;
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

    get upvote() {
        return this._upvote;
    }

    set upvote(value) {
        this._upvote = value;
    }
}
export default PostPreview;