package opalinski.jakub.ApiBackendYWebApp.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/home")
    public String getHome(){
        return "Home";
    }
}
