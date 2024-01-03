package opalinski.jakub.ApiBackendYWebApp.post.comment.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import opalinski.jakub.ApiBackendYWebApp.post.comment.service.SystemCommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class CommentController {

    private final SystemCommentService systemCommentService;

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @PatchMapping("/tokenmang/comment/{entityId}/upvote/{userId}")
    public ResponseEntity<SystemComment> upvoteComment(@PathVariable String entityId, @PathVariable String userId){
        try {
            return ResponseEntity.ok(systemCommentService.upvoteComment(entityId, userId));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @CrossOrigin
    @DeleteMapping("/tokenmang/comment/{entityId}")
    public ResponseEntity<SystemComment> deleteComment(@PathVariable String entityId){
        try {
            return ResponseEntity.ok(systemCommentService.deleteComment(entityId));
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
