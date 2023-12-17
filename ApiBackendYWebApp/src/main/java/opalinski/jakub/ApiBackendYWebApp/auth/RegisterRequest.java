package opalinski.jakub.ApiBackendYWebApp.auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.user.Role;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String username;
  private String email;
  private String password;
  private String description;
  private String avatarUrl;
  private Integer age;
  private Role role;
}
