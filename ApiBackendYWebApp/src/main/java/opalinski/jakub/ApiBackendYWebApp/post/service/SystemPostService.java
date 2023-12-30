package opalinski.jakub.ApiBackendYWebApp.post.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.PostRepository;
import opalinski.jakub.ApiBackendYWebApp.post.model.PostDataResponse;
import opalinski.jakub.ApiBackendYWebApp.post.model.SystemPost;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SystemPostService {

    private final PostRepository postRepository;

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
                .build();
        postRepository.save(post);
        return post;
    }
}

