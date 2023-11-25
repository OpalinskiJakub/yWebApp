package opalinski.jakub.ApiBackendYWebApp.Repository;


import opalinski.jakub.ApiBackendYWebApp.Model.Comment;
import opalinski.jakub.ApiBackendYWebApp.Model.Post;
import opalinski.jakub.ApiBackendYWebApp.Model.User;
import org.springframework.stereotype.Repository;

@Repository
public class PostRepository {
    public Post getPost(){
        User user1 = new User(1L,"Jan","Kowalski");
        User user2 = new User(2L,"Marek","Mazowiecki");
        User user3 = new User(3L,"Krzysztof","Krakowski");
        Comment comment1 = new Comment(1L,user1,"Komentarz glowny #1");
        Comment comment2 = new Comment(2L,user2,"Kometarz glowny #2");
        Comment comment3 = new Comment(3L,user3,"Odpowiedz do komentarza #1 #1");
        Comment comment4 = new Comment(4L,user2,"Odpowiedz do komentarza #1 #2");
        Comment comment5 = new Comment(5L,user1,"Odpowiedz do komentarza #2");
        Post post = new Post(1L,"Post nr 1","Post o reakcie",user1);
        comment1.addAnswer(comment3);
        comment1.addAnswer(comment4);
        comment2.addAnswer(comment5);
        post.addComment(comment1);
        post.addComment(comment2);
        return post;
    }

}
