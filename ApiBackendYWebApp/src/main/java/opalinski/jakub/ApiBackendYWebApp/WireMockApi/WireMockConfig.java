package opalinski.jakub.ApiBackendYWebApp.WireMockApi;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.client.WireMock;

import com.nimbusds.jose.shaded.gson.Gson;
import com.nimbusds.jose.shaded.gson.GsonBuilder;
import opalinski.jakub.ApiBackendYWebApp.Model.Comment;
import opalinski.jakub.ApiBackendYWebApp.Model.Post;
import opalinski.jakub.ApiBackendYWebApp.Model.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;




@Configuration
@Profile("wiremockTest")
public class WireMockConfig {


    private final static int WIREMOCKPORT=8089;

    @Bean()
    public WireMockServer startWireMockServer() {
        WireMockServer wireMockServer = new WireMockServer(WIREMOCKPORT);

        wireMockServer.stubFor(
                WireMock.get(WireMock.urlEqualTo("/post1"))
                        .willReturn(WireMock.aResponse()
                                .withStatus(200)
                                .withHeader("Content-Type", "application/json; charset=UTF-8")
                                .withBody(generatePostAsJson())
                        )
        );

        wireMockServer.start();
        return wireMockServer;
    }
    private String generatePostAsJson() {


        Post post = getPost();

        Gson gson = new GsonBuilder()
                .setPrettyPrinting()
                .disableHtmlEscaping()
                .create();

        return gson.toJson(post);
    }

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