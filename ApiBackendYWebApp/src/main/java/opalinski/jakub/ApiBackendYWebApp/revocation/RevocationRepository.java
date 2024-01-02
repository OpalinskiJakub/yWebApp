package opalinski.jakub.ApiBackendYWebApp.revocation;

import opalinski.jakub.ApiBackendYWebApp.revocation.model.SystemRevocation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RevocationRepository extends MongoRepository<SystemRevocation, String> {
}
