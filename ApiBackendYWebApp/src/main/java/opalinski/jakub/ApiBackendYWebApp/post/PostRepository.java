
package opalinski.jakub.ApiBackendYWebApp.post;

import opalinski.jakub.ApiBackendYWebApp.post.model.SystemPost;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PostRepository extends MongoRepository<SystemPost, String> {
    Optional<SystemPost> findSystemPostById(String id);
    Optional<SystemPost> findAllByTitleContaining(String titleString);
}
