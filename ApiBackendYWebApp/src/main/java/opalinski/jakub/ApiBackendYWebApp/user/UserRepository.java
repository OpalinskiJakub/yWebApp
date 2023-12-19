package opalinski.jakub.ApiBackendYWebApp.user;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<SystemUser, String> {
    Optional<SystemUser> findUserByEmail(String email);
}
