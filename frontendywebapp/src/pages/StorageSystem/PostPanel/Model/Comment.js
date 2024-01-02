class Comment {
    constructor(id, ownerId, ownerName, parentId, content,parentOwnerName) {
        this._id = id;
        this._ownerId = ownerId;
        this._ownerName = ownerName;
        this._parentId = parentId;
        this._content = content;
        this._systemCommentList = [];
        this._parentOwnerName = parentOwnerName;

    }


    get parentOwnerName() {
        return this._parentOwnerName;
    }

    set parentOwnerName(value) {
        this._parentOwnerName = value;
    }

    get systemCommentList() {
        return this._systemCommentList;
    }

    set systemCommentList(value) {
        this._systemCommentList = value;
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

    get parentId() {
        return this._parentId;
    }

    set parentId(value) {
        this._parentId = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
}

export default Comment;