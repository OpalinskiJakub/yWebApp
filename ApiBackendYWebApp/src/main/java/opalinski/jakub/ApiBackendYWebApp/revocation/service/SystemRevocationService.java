package opalinski.jakub.ApiBackendYWebApp.revocation.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.revocation.RevocationRepository;
import opalinski.jakub.ApiBackendYWebApp.revocation.model.SystemRevocation;
import opalinski.jakub.ApiBackendYWebApp.user.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;


@Service
@RequiredArgsConstructor
public class SystemRevocationService {

    private final RevocationRepository revocationRepository;
    private final UserRepository userRepository;

    public SystemRevocation saveRevocation(SystemRevocation systemRevocation) throws IllegalArgumentException{
        if (systemRevocation.getContent() == null
                || systemRevocation.getEmail() == null) {
            throw new IllegalArgumentException("System post must not have any null values");
        }

        var revocation = SystemRevocation.builder()
                .content(systemRevocation.getContent())
                .email(systemRevocation.getEmail())
                .build();

        revocationRepository.save(revocation);
        return revocation;

    }

    public List<SystemRevocation> getAllRevocations() {
        List<SystemRevocation> systemRevocations = revocationRepository.findAll();
        if (systemRevocations.isEmpty()){
            throw new NoSuchElementException("No revocations");
        }
        return systemRevocations;
    }

    public SystemRevocation deleteRevocation(String id) {
        return revocationRepository.findById(id)
                .map(revocation -> {
                    revocationRepository.delete(revocation);
                    return revocation;
                })
                .orElseThrow(() -> new NoSuchElementException("Could not find entity with ID: " + id));
    }
}
