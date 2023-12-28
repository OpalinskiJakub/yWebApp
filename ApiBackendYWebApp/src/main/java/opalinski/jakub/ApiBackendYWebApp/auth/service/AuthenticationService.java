package opalinski.jakub.ApiBackendYWebApp.auth.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.auth.model.AuthenticationRequest;
import opalinski.jakub.ApiBackendYWebApp.auth.model.AuthenticationResponse;
import opalinski.jakub.ApiBackendYWebApp.auth.model.RegisterRequest;
import opalinski.jakub.ApiBackendYWebApp.config.JwtService;
import opalinski.jakub.ApiBackendYWebApp.user.Role;
import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) throws Exception {
        if (request.getEmail() == null || request.getUsername() == null || request.getDescription() == null
                || request.getPassword() == null || request.getAge() == null) {
            throw new Exception("All fields in the RegisterRequest must be non-null");
        }

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
