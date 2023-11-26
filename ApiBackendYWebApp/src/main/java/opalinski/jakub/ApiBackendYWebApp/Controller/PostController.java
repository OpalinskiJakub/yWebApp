package opalinski.jakub.ApiBackendYWebApp.Controller;

import opalinski.jakub.ApiBackendYWebApp.Model.Post;
import opalinski.jakub.ApiBackendYWebApp.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.SyncFailedException;

@RestController
@CrossOrigin("http://localhost:3000/")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/post1")
    public Post getPost(){
        return postRepository.getPost();
    }

}
