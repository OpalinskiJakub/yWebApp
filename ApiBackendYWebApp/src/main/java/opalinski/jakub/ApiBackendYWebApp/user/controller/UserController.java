package opalinski.jakub.ApiBackendYWebApp.user.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.model.UserDataResponse;
import opalinski.jakub.ApiBackendYWebApp.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import wiremock.org.eclipse.jetty.http.HttpParser;

import java.util.Base64;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tokenmang/user")
@PreAuthorize("hasRole('USER')")
public class UserController {
    private final UserService userService;

    @CrossOrigin
    @PatchMapping("/{id}")
    public ResponseEntity<UserDataResponse> updateUser(@PathVariable String id, @RequestBody SystemUser systemUser) {
        return ResponseEntity.ok(userService.updateUser(id, systemUser));
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<UserDataResponse> getSpecificUser(@PathVariable String id) {
        return ResponseEntity.ok(userService.getUser(id));
    }
    @CrossOrigin
    @GetMapping("/email/{encodedEmail}")
    public ResponseEntity<UserDataResponse> getUserByEmail(@PathVariable String encodedEmail) {
        byte[] decodedBytes = Base64.getDecoder().decode(encodedEmail);
        String email = new String(decodedBytes);
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }
    @CrossOrigin
    @GetMapping()
    public ResponseEntity<List<UserDataResponse>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    @CrossOrigin
    @GetMapping("/banned")
    public ResponseEntity<List<UserDataResponse>> getBannedUsers() {
        try{
            List<UserDataResponse> userDataResponseList = userService.getBannedUsers();
            if (userDataResponseList == null){
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (userDataResponseList.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return ResponseEntity.ok(userDataResponseList);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
