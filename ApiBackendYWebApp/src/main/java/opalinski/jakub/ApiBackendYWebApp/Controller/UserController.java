package opalinski.jakub.ApiBackendYWebApp.Controller;


import opalinski.jakub.ApiBackendYWebApp.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    PostRepository postRepository;

    @GetMapping("/user1")
    public String getHome(){
        return "Home";
    }
}
