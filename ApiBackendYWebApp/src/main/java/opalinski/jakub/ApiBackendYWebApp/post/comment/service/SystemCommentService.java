
package opalinski.jakub.ApiBackendYWebApp.post.comment.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.PostRepository;
import opalinski.jakub.ApiBackendYWebApp.post.comment.CommentRepository;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import opalinski.jakub.ApiBackendYWebApp.post.model.SystemPost;
import opalinski.jakub.ApiBackendYWebApp.user.UserRepository;
import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import org.apache.catalina.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SystemCommentService {
    private static final Logger LOGGER = LoggerFactory.getLogger(SystemCommentService.class);
    private final CommentRepository commentRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public SystemComment saveComment(String parentId, SystemComment systemComment) throws IllegalArgumentException {
        if ((parentId == null || parentId.isEmpty()) ||
                (systemComment == null) ||
                (systemComment.getOwnerId() == null || systemComment.getOwnerId().isEmpty()) ||
                (systemComment.getOwnerName() == null || systemComment.getOwnerName().isEmpty()) ||
                (systemComment.getContent() == null || systemComment.getContent().isEmpty())) {
            throw new IllegalArgumentException("One or more fields are empty or null");
        }

        String parentOwnerName = getCommentParentOwnerName(parentId);
        if (parentOwnerName == null || parentOwnerName.isEmpty()) {
            throw new IllegalArgumentException("There is no such parent.");
        }

        var comment = SystemComment.builder()
                .ownerName(systemComment.getOwnerName())
                .ownerId(systemComment.getOwnerId())
                .content(systemComment.getContent())
                .parentOwnerName(parentOwnerName)
                .parentId(parentId)
                .upvote(0)
                .systemCommentList(Collections.emptyList())
                .upvoteUserId(Collections.emptyList())
                .build();

        commentRepository.save(comment);
        return comment;
    }

    private String getCommentParentOwnerName(String parentId) {
        Optional<SystemPost> postParent = postRepository.findById(parentId);
        if (postParent.isPresent()) {
            return postParent.get().getOwnerName();
        }
        Optional<SystemComment> commentParent = commentRepository.findById(parentId);
        return commentParent.map(SystemComment::getOwnerName).orElse(null);
    }

    public SystemComment upvoteComment(String commentId, String userId) throws Exception {
        if (commentId == null || userId == null) {
            throw new Exception("Request params not satisfied.");
        }
        Optional<SystemComment> systemComment = commentRepository.findById(commentId);
        if (systemComment.isEmpty()) {
            throw new Exception("Error while processing post entity.");
        }
        var commentData = systemComment.get();
        if (commentData.getUpvoteUserId().contains(userId)) {
            commentData.setUpvote(commentData.getUpvote() - 1);
            commentData.getUpvoteUserId().remove(userId);
        } else {
            commentData.setUpvote(commentData.getUpvote() + 1);
            commentData.getUpvoteUserId().add(userId);
        }
        commentRepository.save(commentData);
        return commentData;
    }

    public SystemComment deleteComment(String id) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String name = getUserName(authentication.getName());
        return commentRepository.findById(id)
                .map(systemComment -> {
                    if (!systemComment.getOwnerName().equals(name)){
                        return null;
                    }
                    commentRepository.delete(systemComment);
                    return systemComment;
                })
                .orElseThrow(() -> new NoSuchElementException("Could not find entity with ID: " + id));
    }
    public String getUserName(String email) throws Exception {
        Optional<SystemUser> systemUser = userRepository.findSystemUserByEmailAndActiveTrue(email);
        return systemUser.map(SystemUser::getEmail) // email is actually mapped to username :)
                .orElseThrow(() -> new Exception("Error while processing authentication context."));
    }
}

