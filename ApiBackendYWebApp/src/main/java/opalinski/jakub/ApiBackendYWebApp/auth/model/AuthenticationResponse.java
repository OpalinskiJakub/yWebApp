package opalinski.jakub.ApiBackendYWebApp.auth.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

  @JsonProperty("access_token")
  @JsonInclude(JsonInclude.Include.NON_NULL)
  private String accessToken;
  @JsonProperty("user_status")
  @JsonInclude(JsonInclude.Include.NON_NULL)
  private String userStatus;
}
