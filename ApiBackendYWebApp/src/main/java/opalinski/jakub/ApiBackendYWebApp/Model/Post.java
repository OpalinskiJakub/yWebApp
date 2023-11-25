package opalinski.jakub.ApiBackendYWebApp.Model;

import java.util.ArrayList;

public class Post {

    private int postId;

    private String name;
    private String content;

    private User user;

    private ArrayList<Comment> comments;

}
