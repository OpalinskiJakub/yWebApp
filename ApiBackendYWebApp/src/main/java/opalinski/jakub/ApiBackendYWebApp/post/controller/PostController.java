package opalinski.jakub.ApiBackendYWebApp.post.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.model.PostDataResponse;
import opalinski.jakub.ApiBackendYWebApp.post.model.SystemPost;
import opalinski.jakub.ApiBackendYWebApp.post.service.SystemPostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value ="/api/v1/tokenmang/post", consumes = MediaType.APPLICATION_JSON_VALUE)
@PreAuthorize("hasRole('USER')")
public class PostController {

    private final SystemPostService systemPostService;

    @CrossOrigin
    @PostMapping()
    public ResponseEntity<SystemPost> savePost(@RequestBody SystemPost systemPost){
        try {
            return ResponseEntity.ok(systemPostService.savePost(systemPost));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @CrossOrigin
    @GetMapping()
    public ResponseEntity<List<PostDataResponse>> getAllPosts() {
        List<PostDataResponse> postDataResponseList = systemPostService.getAllPosts();
        if(postDataResponseList.isEmpty())
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return ResponseEntity.ok(systemPostService.getAllPosts());
    }
}
