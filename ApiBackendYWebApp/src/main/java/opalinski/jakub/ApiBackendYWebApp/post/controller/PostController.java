package opalinski.jakub.ApiBackendYWebApp.post.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import opalinski.jakub.ApiBackendYWebApp.post.comment.service.SystemCommentService;
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
@RequestMapping(value ="/api/v1", consumes = MediaType.APPLICATION_JSON_VALUE)
public class PostController {

    private final SystemPostService systemPostService;
    private final SystemCommentService systemCommentService;

    @CrossOrigin
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/tokenmang/post")
    public ResponseEntity<SystemPost> savePost(@RequestBody SystemPost systemPost){
        try {
            return ResponseEntity.ok(systemPostService.savePost(systemPost));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/tokenmang/post/comment/{parentId}")
    public ResponseEntity<SystemComment> saveComment(@PathVariable String parentId, @RequestBody SystemComment systemComment){
        try {
            return ResponseEntity.ok(systemCommentService.saveComment(parentId, systemComment));
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/tokenmang/post/{id}")
    public ResponseEntity<SystemPost> getSpecificPost(@PathVariable String id){
        try {
            return ResponseEntity.ok(systemPostService.getPostById(id));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin
    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/tokenmang/post/{entityId}/upvote/{userId}")
    public ResponseEntity<SystemPost> upvotePost(@PathVariable String entityId, @PathVariable String userId){
        try {
            return ResponseEntity.ok(systemPostService.upvotePost(entityId, userId));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin
    @GetMapping("/public/post")
    public ResponseEntity<List<PostDataResponse>> getAllPosts() {
        List<PostDataResponse> postDataResponseList = systemPostService.getAllPosts();
        if(postDataResponseList.isEmpty())
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return ResponseEntity.ok(systemPostService.getAllPosts());
    }
}
