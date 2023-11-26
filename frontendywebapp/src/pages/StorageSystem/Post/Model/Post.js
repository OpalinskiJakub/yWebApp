class Post{

    constructor(postId, name, content, author, comments) {
        this.postId = postId;
        this.name = name;
        this.content = content;
        this.author = author;
        this.comments = comments.map(comment => new Comment(
            comment.commentId,
            comment.author,
            comment.content,
            comment.answers
        ));

        comments.forEach(comment => {
            console.log(comment.commentId);
            console.log(comment.author);
            console.log(comment.content);
            console.log(comment.answers);
        });
    }

}
export default Post;