class Comment{

    constructor(commentId,author,content,answers) {
        this.commentId=commentId;
        this.author=author;
        this.content=content;
        this.answers = answers.map(answer => new Comment(
            answer.commentId,
            answer.author,
            answer.content,
            answer.answers
        ));
    }

}

export default Comment;