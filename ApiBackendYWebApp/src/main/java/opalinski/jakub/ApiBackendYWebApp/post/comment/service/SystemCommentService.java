
package opalinski.jakub.ApiBackendYWebApp.post.comment.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.comment.CommentRepository;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class SystemCommentService {

    private final CommentRepository commentRepository;
    public SystemComment saveComment(String parentId, SystemComment systemComment) throws IllegalArgumentException {
        if ((parentId == null || parentId.isEmpty()) ||
                (systemComment == null) ||
                (systemComment.getOwnerId() == null || systemComment.getOwnerId().isEmpty()) ||
                (systemComment.getOwnerName() == null || systemComment.getOwnerName().isEmpty()) ||
                (systemComment.getContent() == null || systemComment.getContent().isEmpty())) {
            throw new IllegalArgumentException("One or more fields are empty or null");
        }

        var comment = SystemComment.builder()
                .ownerName(systemComment.getOwnerName())
                .ownerId(systemComment.getOwnerId())
                .content(systemComment.getContent())
                .parentId(parentId)
                .upvote(0)
                .systemCommentList(Collections.emptyList())
                .upvoteUserId(Collections.emptyList())
                .build();

        commentRepository.save(comment);
        return comment;
    }
}

