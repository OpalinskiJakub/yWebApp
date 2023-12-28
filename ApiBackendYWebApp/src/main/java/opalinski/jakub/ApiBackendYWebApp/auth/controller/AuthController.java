package opalinski.jakub.ApiBackendYWebApp.auth.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.auth.service.AuthenticationService;
import opalinski.jakub.ApiBackendYWebApp.auth.model.RegisterRequest;
import opalinski.jakub.ApiBackendYWebApp.auth.model.AuthenticationRequest;
import opalinski.jakub.ApiBackendYWebApp.auth.model.AuthenticationResponse;
import opalinski.jakub.ApiBackendYWebApp.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequestMapping(value = "/api/v1/auth", consumes = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService service;
    private final UserService userService;

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @CrossOrigin
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        try {
            return ResponseEntity.ok(service.authenticate(request));
        } catch (Exception e) {
            if(userService.checkUser(request)){
                return ResponseEntity.ok(AuthenticationResponse.builder().userStatus("userBlocked").build());
            }
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
}
