package opalinski.jakub.ApiBackendYWebApp.post.comment;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import opalinski.jakub.ApiBackendYWebApp.post.comment.service.SystemCommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping(value ="/api/v1", consumes = MediaType.APPLICATION_JSON_VALUE)
public class CommentController {

    private final SystemCommentService systemCommentService;
    @CrossOrigin
    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/tokenmang/comment/{entityId}/upvote/{userId}")
    public ResponseEntity<SystemComment> upvoteComment(@PathVariable String entityId, @PathVariable String userId){
        try {
            return ResponseEntity.ok(systemCommentService.upvoteComment(entityId, userId));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
