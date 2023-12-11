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
        Comment comment6 = new Comment(3L,user3,"Odpowiedz do komentarza #1 #2");
        Comment comment7 = new Comment(3L,user3,"Odpowiedz do komentarza #1 #1");
        Comment comment8 = new Comment(3L,user3,"Odpowiedz do komentarza #1 #1");
        Comment comment9 = new Comment(3L,user3,"Odpowiedz do komentarza #1 #1");
        Comment comment10 = new Comment(3L,user3,"Odpowiedz do komentarza #1 #1");
        Comment comment11 = new Comment(3L,user3,"Odpowiedz do komentarza #1 #1");
        Comment comment12 = new Comment(4L,user2,"Odpowiedz do komentarza #1 #2");
        Comment comment5 = new Comment(5L,user1,"Odpowiedz do komentarza #2");
        Post post = new Post(1L,"Post nr 1","Post o reakcie",user1);
        comment11.addAnswer(comment12);
        comment10.addAnswer(comment11);
        comment9.addAnswer(comment10);
        comment8.addAnswer(comment9);
        comment7.addAnswer(comment8);
        comment6.addAnswer(comment7);
        comment1.addAnswer(comment3);
        comment1.addAnswer(comment6);
        comment2.addAnswer(comment5);
        post.addComment(comment1);
        post.addComment(comment2);
        return post;
    }

}
