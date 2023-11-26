class Post{

    constructor(postId,name,content,author,comments) {
        this.postId=postId;
        this.name=name;
        this.content=content;
        this.author=author;
        this.content=comments.map((comment) => new Comment(comment.commentId,comment.author,comment.content,comment.answers))
    }

}