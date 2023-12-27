package opalinski.jakub.ApiBackendYWebApp.user;

import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<SystemUser, String> {
    Optional<SystemUser> findSystemUserByEmailAndActiveTrue(String email);
    Optional<SystemUser> findUserById(String id);
    Optional<List<SystemUser>> findAllByActive(Boolean active);
}
