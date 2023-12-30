package opalinski.jakub.ApiBackendYWebApp.post.comment;

import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends MongoRepository<SystemComment, String> {
    Optional<List<SystemComment>> findAllByParentId(String id);
}


