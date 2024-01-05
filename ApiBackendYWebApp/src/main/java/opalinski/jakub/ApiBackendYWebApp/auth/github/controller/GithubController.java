package opalinski.jakub.ApiBackendYWebApp.auth.github.controller;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.auth.github.service.GithubAccessControlService;
import opalinski.jakub.ApiBackendYWebApp.user.model.UserDataResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth/github")
@RequiredArgsConstructor
public class GithubController {

    private static final Logger LOGGER = LoggerFactory.getLogger(GithubController.class);
    private final GithubAccessControlService githubAccessControlService;
    @CrossOrigin
    @GetMapping("/callback")
    public ResponseEntity<UserDataResponse> callback(@RequestParam("code") String code) {
        String oAuthGithubToken = githubAccessControlService.accessAuthorization(code);
        UserDataResponse userDataResponse = githubAccessControlService.fetchUserData(oAuthGithubToken);
        return ResponseEntity.ok(userDataResponse);
    }
}
