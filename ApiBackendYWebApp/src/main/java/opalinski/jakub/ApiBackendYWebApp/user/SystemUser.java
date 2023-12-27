package opalinski.jakub.ApiBackendYWebApp.user;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/*
{
  "id": 1,
  "username": "FirstNickForUser",
  "email": "fisr@user.com",
  "role": "noAdmin",
  "active": true,
  "age": 23,
  "description": "A short description from users about themsleves",
  "avatar_URL": "https://some/endpoint.jpg"
}
 */

@Data
@NoArgsConstructor
@Document
@Builder
@AllArgsConstructor
public class SystemUser implements UserDetails {

    public SystemUser(String username, String email, String description, String password, Boolean active, Integer age, Role role, String avatarUrl) {
        this.username = username;
        this.email = email;
        this.description = description;
        this.password = password;
        this.active = active;
        this.age = age;
        this.role = role;
        this.avatarUrl = avatarUrl;
    }

    @Id
    private String id;
    @Indexed(unique = true)
    private String username;
    @Indexed(unique = true)
    private String email;
    private String description;
    @JsonIgnore
    private String password;
    @JsonIgnore
    private Boolean active;
    private Integer age;
    @JsonIgnore
    private Role role;
    private String avatarUrl;

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
    }

    @Override
    public String getPassword() {
        return password;
    }
    @JsonProperty("username")
    public String getEmail(){ return username;}

    @Override
    @JsonProperty("email")
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }
}
