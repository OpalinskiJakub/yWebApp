import PostPreview from "./PostPreview";
class PostPreviewBuilder {
    constructor() {
        this.postPreview = new PostPreview(
            '',
            '',
            '',
            '',
            '');
    }

    setId(id) {
        this.postPreview.id = id;
        return this;
    }

    setOwnerId(ownerId) {
        this.postPreview.ownerId = ownerId;
        return this;
    }

    setOwnerName(ownerName) {
        this.postPreview.ownerName = ownerName;
        return this;
    }

    setTitle(title) {
        this.postPreview.title = title;
        return this;
    }

    setUpvote(upvote) {
        this.postPreview.upvote = upvote;
        return this;
    }

    static Builder() {
        return new PostPreviewBuilder();
    }

    build() {
        return this.postPreview;
    }
}
export default PostPreviewBuilder;