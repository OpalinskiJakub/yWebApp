package opalinski.jakub.ApiBackendYWebApp.user.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.user.Role;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDataResponse {

    public UserDataResponse (SystemUser systemUser){
        this.id = systemUser.getId();
        this.age = systemUser.getAge();
        this.avatarUrl = systemUser.getAvatarUrl();
        this.username = systemUser.getUsername();
        this.email = systemUser.getEmail();
        this.description = systemUser.getDescription();
        this.role = systemUser.getRole();
    }

    private String id;
    @JsonProperty("email")
    private String username;
    @JsonProperty("username")
    private String email;
    private Role role;
    private String description;
    private Integer age;
    private String avatarUrl;

}
