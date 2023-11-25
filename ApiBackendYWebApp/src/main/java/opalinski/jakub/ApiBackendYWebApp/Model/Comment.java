package opalinski.jakub.ApiBackendYWebApp.Model;

import java.util.ArrayList;

public class Comment {
    private long commentId;

    private User author;

    private String content;

    private ArrayList<Comment> answers;


    public Comment(long commentId, User author, String content) {
        this.commentId = commentId;
        this.author = author;
        this.content = content;
        this.answers = new ArrayList<>();
    }

    public long getCommentId() {
        return commentId;
    }

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void addAnswer(Comment answer){
        this.answers.add(answer);
    }

    public ArrayList<Comment> getAnswers() {
        return answers;
    }

    public void setAnswers(ArrayList<Comment> answers) {
        this.answers = answers;
    }
}
