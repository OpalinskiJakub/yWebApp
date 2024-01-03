package opalinski.jakub.ApiBackendYWebApp.post.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import opalinski.jakub.ApiBackendYWebApp.post.comment.service.SystemCommentService;
import opalinski.jakub.ApiBackendYWebApp.post.model.PostDataResponse;
import opalinski.jakub.ApiBackendYWebApp.post.model.SystemPost;
import opalinski.jakub.ApiBackendYWebApp.post.service.SystemPostService;
import opalinski.jakub.ApiBackendYWebApp.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class PostController {

    private static final Logger LOGGER = LoggerFactory.getLogger(PostController.class);
    private final SystemPostService systemPostService;
    private final SystemCommentService systemCommentService;


    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @PostMapping("/tokenmang/post")
    public ResponseEntity<SystemPost> savePost(@RequestBody SystemPost systemPost) {
        try {
            return ResponseEntity.ok(systemPostService.savePost(systemPost));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @CrossOrigin
    @GetMapping("/public/post")
    public ResponseEntity<List<PostDataResponse>> getAllPosts() {
        List<PostDataResponse> postDataResponseList = systemPostService.getAllPosts();
        if (postDataResponseList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return ResponseEntity.ok(systemPostService.getAllPosts());
    }


    @PreAuthorize("hasRole('ADMIN')")
    @CrossOrigin
    @GetMapping("/tokenmang/post/reported")
    public ResponseEntity<List<PostDataResponse>> getReportedPosts() {
        try {
            List<PostDataResponse> postDataResponseList = systemPostService.getReportedPosts();
            if (postDataResponseList.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return ResponseEntity.ok(postDataResponseList);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @PostMapping("/tokenmang/post/comment/{parentId}")
    public ResponseEntity<SystemComment> saveComment(@PathVariable String parentId, @RequestBody SystemComment systemComment) {
        try {
            return ResponseEntity.ok(systemCommentService.saveComment(parentId, systemComment));
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @GetMapping("/tokenmang/post/{id}")
    public ResponseEntity<SystemPost> getSpecificPost(@PathVariable String id) {
        try {
            return ResponseEntity.ok(systemPostService.getPostById(id));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @GetMapping("/tokenmang/post/user/{userId}")
    public ResponseEntity<List<PostDataResponse>> getUserPosts(@PathVariable String userId) {
        try {
            List<PostDataResponse> postDataResponseList = systemPostService.getUserPosts(userId);
            if (postDataResponseList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return ResponseEntity.ok(postDataResponseList);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @GetMapping("/tokenmang/post/search/{searchdata}")
    public ResponseEntity<List<PostDataResponse>> getSpecificPostByTitle(@PathVariable String searchdata) {
        try {
            byte[] decodedBytes = Base64.getDecoder().decode(searchdata);
            String title = new String(decodedBytes);
            List<PostDataResponse> postDataResponseList = systemPostService.getSpecificPostByTitle(title);
            if (postDataResponseList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return ResponseEntity.ok(postDataResponseList);
        } catch (IllegalArgumentException e) {
            LOGGER.info(e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (NoSuchElementException e) {
            LOGGER.info(e.getMessage());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            LOGGER.info(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @PatchMapping("/tokenmang/post/{id}")
    public ResponseEntity<SystemPost> updatePost(@PathVariable String id, @RequestBody SystemPost systemPost) {
        try {
            return ResponseEntity.ok(systemPostService.updatePost(id, systemPost));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @PatchMapping("/tokenmang/post/{id}/report")
    public ResponseEntity<SystemPost> reportPost(@PathVariable String id) {
        try {
            return ResponseEntity.ok(systemPostService.reportPost(id, true));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @CrossOrigin
    @PatchMapping("/tokenmang/post/{id}/report/undo")
    public ResponseEntity<SystemPost> unReportPost(@PathVariable String id) {
        try {
            return ResponseEntity.ok(systemPostService.reportPost(id, false));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @DeleteMapping("/tokenmang/post/{id}")
    public ResponseEntity<SystemPost> deletePost(@PathVariable String id) {
        try {
            return ResponseEntity.ok(systemPostService.removePost(id));
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @PatchMapping("/tokenmang/post/{entityId}/upvote/{userId}")
    public ResponseEntity<SystemPost> upvotePost(@PathVariable String entityId, @PathVariable String userId) {
        try {
            return ResponseEntity.ok(systemPostService.upvotePost(entityId, userId));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
