package opalinski.jakub.ApiBackendYWebApp.auth.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.auth.model.AuthenticationRequest;
import opalinski.jakub.ApiBackendYWebApp.auth.model.AuthenticationResponse;
import opalinski.jakub.ApiBackendYWebApp.auth.model.RegisterRequest;
import opalinski.jakub.ApiBackendYWebApp.config.JwtService;
import opalinski.jakub.ApiBackendYWebApp.user.Role;
import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.UserRepository;
import opalinski.jakub.ApiBackendYWebApp.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = SystemUser.builder()
                .email(request.getEmail())
                .username(request.getUsername())
                .description(request.getDescription())
                .role(Role.USER)
                .avatarUrl("./customAvatar.png")
                .active(true)
                .password(passwordEncoder.encode(request.getPassword()))
                .age(request.getAge())
                .build();
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) throws Exception {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findSystemUserByEmailAndActiveTrue(request.getEmail())
                .orElseThrow(Exception::new);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .build();
    }
}
