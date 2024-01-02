import Comment from "./Comment";
class CommentBuilder {
    constructor() {
        this.comment = new Comment('', '', '', '', '','');
    }

    setParentOwnerName(parentOwnerName) {
        this.comment._parentOwnerName = parentOwnerName;
        return this;
    }

    setParentOwnerName(parentOwnerName) {
        this.comment._parentOwnerName = parentOwnerName;
        return this;
    }

    setId(id) {
        this.comment._id = id;
        return this;
    }

    setOwnerId(ownerId) {
        this.comment._ownerId = ownerId;
        return this;
    }

    setOwnerName(ownerName) {
        this.comment._ownerName = ownerName;
        return this;
    }

    setParentId(parentId) {
        this.comment._parentId = parentId;
        return this;
    }

    setContent(content) {
        this.comment._content = content;
        return this;
    }

    setSystemCommentList(systemCommentList) {
        if (systemCommentList === undefined || systemCommentList === null) {
            this.comment._systemCommentList = [];
        } else {
            const comments = systemCommentList.map(commentData => CommentBuilder.Builder()
                .setId(commentData.id)
                .setOwnerId(commentData.ownerId)
                .setOwnerName(commentData.ownerName)
                .setParentId(commentData.parentId)
                .setContent(commentData.content)
                .setSystemCommentList(commentData.systemCommentList)
                .setOwnerName(commentData.parentOwnerName)
                .build());
            this.comment._systemCommentList=comments
        }

        return this;
    }

    build() {
        return this.comment;
    }

    static Builder() {
        return new CommentBuilder();
    }
}
export default CommentBuilder;