package opalinski.jakub.ApiBackendYWebApp.auth.github.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import opalinski.jakub.ApiBackendYWebApp.auth.github.util.GithubBerear;
import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.model.UserDataResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;
import java.util.Objects;

@Service
public class GithubAccessControlService {

    private static final Logger LOGGER = LoggerFactory.getLogger(GithubAccessControlService.class);

    @Value("${github.clientid}")
    private String clientId;
    @Value("${github.clientsecret}")
    private String clientSecret;
    @Value("${github.uri}")
    private String githubUri;
    @Value("${github.userUri}")
    private String githubUserUri;
    @Value("${github.redirect}")
    private String redirect;

    private final WebClient webClient;
    public GithubAccessControlService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    public String accessAuthorization(String code) {
        String token = webClient.post()
                .uri(githubUri)
                .header("Content-Type", "application/json")
                .bodyValue(Map.of(
                        "client_id", clientId,
                        "client_secret", clientSecret,
                        "code", code))
                .retrieve()
                .bodyToMono(String.class)
                .block();
        assert token != null;
        return GithubBerear.retrieveToken(token);
    }

    public UserDataResponse fetchUserData(String oAuthGithubToken) {
        String user = webClient.get()
                .uri(githubUserUri)
                .header("Authorization", "Bearer "+oAuthGithubToken)
                .retrieve()
                .bodyToMono(String.class)
                .block();
        return new UserDataResponse(Objects.requireNonNull(parseJsonToSystemUser(user)));
    }

    public static SystemUser parseJsonToSystemUser(String jsonString) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(jsonString);

            String username = jsonNode.get("login").asText();
            String description = jsonNode.get("bio").asText();
            String avatarUrl = jsonNode.get("avatar_url").asText();

            return SystemUser.builder()
                    .username(username)
                    .description(description)
                    .avatarUrl(avatarUrl)
                    .build();
        } catch (Exception e) {
            LOGGER.error(e.getMessage());
            return null;
        }
    }
}
