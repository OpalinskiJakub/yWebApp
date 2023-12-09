package opalinski.jakub.ApiBackendYWebApp.Model;

import java.util.ArrayList;

public class Post {

    private long postId;

    private String title;
    private String content;

    private User author;

    private ArrayList<Comment> comments;

    public Post(long postId, String title, String content, User author) {
        this.postId = postId;
        this.title = title;
        this.content = content;
        this.author = author;
        this.comments = new ArrayList<>();
    }

    public long getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String name) {
        this.title = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public void addComment(Comment comment){
        this.comments.add(comment);
    }

    public void setPostId(long postId) {
        this.postId = postId;
    }

    public ArrayList<Comment> getComments() {
        return comments;
    }

    public void setComments(ArrayList<Comment> comments) {
        this.comments = comments;
    }
}
