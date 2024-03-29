package opalinski.jakub.ApiBackendYWebApp.post.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.PostRepository;
import opalinski.jakub.ApiBackendYWebApp.post.comment.CommentRepository;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import opalinski.jakub.ApiBackendYWebApp.post.model.PostDataResponse;
import opalinski.jakub.ApiBackendYWebApp.post.model.SystemPost;
import opalinski.jakub.ApiBackendYWebApp.user.Role;
import opalinski.jakub.ApiBackendYWebApp.user.UserRepository;
import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.model.UserDataResponse;
import org.apache.catalina.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SystemPostService {

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    public List<PostDataResponse> getAllPosts() {
        List<SystemPost> systemPosts = postRepository.findAll();
        if (systemPosts.isEmpty()) {
            return Collections.emptyList();
        }
        return systemPosts.stream().map(PostDataResponse::new).collect(Collectors.toList());
    }

    public SystemPost savePost(SystemPost systemPost) {
        if (systemPost.getOwnerId() == null
                || systemPost.getOwnerName() == null
                || systemPost.getTitle() == null
                || systemPost.getContent() == null) {
            throw new IllegalArgumentException("System post must not have any null values");
        }
        var post = SystemPost.builder()
                .title(systemPost.getTitle())
                .content(systemPost.getContent())
                .ownerName(systemPost.getOwnerName())
                .ownerId(systemPost.getOwnerId())
                .upvote(0)
                .reported(false)
                .upvoteUserId(Collections.emptyList())
                .systemCommentList(Collections.emptyList())
                .build();
        postRepository.save(post);
        return post;
    }

    public SystemPost getPostById(String id) throws Exception {
        Optional<SystemPost> systemPosts = postRepository.findSystemPostById(id);
        if (systemPosts.isEmpty()) {
            throw new Exception("Could not find post.");
        }

        List<SystemComment> systemCommentList = fetchComments(id);
        var systemPostData = systemPosts.get();

        if (systemCommentList == null) {
            throw new Exception("Error while processing comments.");
        }

        if (!systemCommentList.isEmpty()) {
            systemPostData.setSystemCommentList(systemCommentList);
            processComments(systemCommentList);
        }

        return systemPosts.get();
    }

    private void processComments(List<SystemComment> systemCommentList) {
        if (systemCommentList != null && !systemCommentList.isEmpty()) {
            systemCommentList.forEach(systemComment -> {
                List<SystemComment> comments = fetchComments(systemComment.getId());
                processComments(comments);
                systemComment.setSystemCommentList(comments);
            });
        }
    }

    private List<SystemComment> fetchComments(String parentId) {
        Optional<List<SystemComment>> systemCommentList = commentRepository.findAllByParentId(parentId);
        return systemCommentList.orElse(null);
    }

    public SystemPost upvotePost(String postId, String userId) throws Exception {
        if (postId == null || userId == null) {
            throw new Exception("Request params not satisfied.");
        }
        Optional<SystemPost> systemPost = postRepository.findById(postId);
        if (systemPost.isEmpty()) {
            throw new Exception("Error while processing post entity.");
        }
        var postData = systemPost.get();
        if (postData.getUpvoteUserId().contains(userId)) {
            postData.setUpvote(postData.getUpvote() - 1);
            postData.getUpvoteUserId().remove(userId);
        } else {
            postData.setUpvote(postData.getUpvote() + 1);
            postData.getUpvoteUserId().add(userId);
        }
        postRepository.save(postData);
        return postData;
    }

    public SystemPost updatePost(String id, SystemPost systemPost) {
        Optional<SystemPost> optionalSystemPost = postRepository.findSystemPostById(id);

        if (optionalSystemPost.isEmpty()) {
            return null;
        }

        var systemPostData = optionalSystemPost.get();
        systemPostData.setContent(systemPost.getContent() != null ? systemPost.getContent() : systemPostData.getContent());
        postRepository.save(systemPostData);
        return systemPostData;
    }

    public SystemPost removePost(String id) throws Exception {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDataResponse user = getUserName(authentication.getName());

        return postRepository.findById(id)
                .map(systemPost -> {
                    if (!systemPost.getOwnerName().equals(user.getEmail()) && !user.getRole().equals(Role.ADMIN)) {
                        return null;
                    }
                    postRepository.delete(systemPost);
                    return systemPost;
                })
                .orElseThrow(() -> new NoSuchElementException("Could not find entity with ID: " + id));
    }

    private UserDataResponse getUserName(String email) throws Exception {
        Optional<SystemUser> systemUser = userRepository.findSystemUserByEmailAndActiveTrue(email);
        return systemUser.map(UserDataResponse::new) // email is actually mapped to username :)
                .orElseThrow(() -> new Exception("Error while processing authentication context."));
    }

    public SystemPost reportPost(String id, Boolean flag) throws Exception {
        return postRepository.findById(id)
                .map(systemPost -> {
                    systemPost.setReported(flag);
                    postRepository.save(systemPost);
                    return systemPost;
                })
                .orElseThrow(() -> new Exception("Could not find entity with ID: " + id));
    }

    public List<PostDataResponse> getSpecificPostByTitle(String title) {
        if (title == null || title.isEmpty()) {
            throw new IllegalArgumentException("Request not satisfied.");
        }

        return postRepository.findAllByTitleLike(title)
                .map(posts -> posts
                        .stream()
                        .map(PostDataResponse::new))
                .orElseThrow(() -> new NoSuchElementException("No such element found"))
                .collect(Collectors.toList());
    }

    public List<PostDataResponse> getUserPosts(String userId) {
        return postRepository.findAllByOwnerId(userId)
                .map(systemPosts -> systemPosts
                        .stream()
                        .map(PostDataResponse::new))
                .orElseThrow(() -> new NoSuchElementException("No such element found"))
                .collect(Collectors.toList());
    }

    public List<PostDataResponse> getReportedPosts() {
        return postRepository.findAllByReported(true)
                .map(systemPosts -> systemPosts
                        .stream()
                        .map(PostDataResponse::new))
                .orElseThrow(()-> new NoSuchElementException("No such element found"))
                .collect(Collectors.toList());
    }
}

