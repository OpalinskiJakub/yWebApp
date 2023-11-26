class Post{

    constructor(postId, name, content, author, comments) {
        this.postId = postId;
        this.name = name;
        this.content = content;
        this.author = author;
        this.comments = comments;

        const valuesArray = Object.values(this.comments);

        valuesArray.forEach(element => {
            console.log(element.commentId);
            console.log(element.author);
            console.log(element.content);
        });
    }

}
export default Post;