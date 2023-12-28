package opalinski.jakub.ApiBackendYWebApp.user.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.model.UserDataResponse;
import opalinski.jakub.ApiBackendYWebApp.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tokenmang/user")
@PreAuthorize("hasRole('USER')")
public class UserController {
    private final UserService userService;

    @PutMapping("/{id}")
    public ResponseEntity<UserDataResponse> updateUser(@PathVariable String id, @RequestBody SystemUser systemUser) {
        return ResponseEntity.ok(userService.updateUser(id, systemUser));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDataResponse> getSpecificUser(@PathVariable String id) {
        return ResponseEntity.ok(userService.getUser(id));
    }

    @GetMapping()
    public ResponseEntity<List<UserDataResponse>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}
