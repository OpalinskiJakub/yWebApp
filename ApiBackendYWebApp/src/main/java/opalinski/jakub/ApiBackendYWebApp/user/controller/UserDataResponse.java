package opalinski.jakub.ApiBackendYWebApp.user.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.user.SystemUser;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDataResponse {
    @JsonProperty("system_user")
    private SystemUser systemUser;
}
