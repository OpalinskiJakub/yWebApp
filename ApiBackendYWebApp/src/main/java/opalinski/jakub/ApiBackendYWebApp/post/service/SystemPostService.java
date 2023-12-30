package opalinski.jakub.ApiBackendYWebApp.post.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.PostRepository;
import opalinski.jakub.ApiBackendYWebApp.post.comment.CommentRepository;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import opalinski.jakub.ApiBackendYWebApp.post.model.PostDataResponse;
import opalinski.jakub.ApiBackendYWebApp.post.model.SystemPost;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SystemPostService {

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

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
        if (postData.getUpvoteUserId().contains(userId)){
            postData.setUpvote(postData.getUpvote()-1);
            postData.getUpvoteUserId().remove(userId);
        }
        else{
            postData.setUpvote(postData.getUpvote()+1);
            postData.getUpvoteUserId().add(userId);
        }
        postRepository.save(postData);
        return postData;
    }
}
