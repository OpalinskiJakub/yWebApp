package opalinski.jakub.ApiBackendYWebApp.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static opalinski.jakub.ApiBackendYWebApp.user.Permission.ADMIN_CREATE;
import static opalinski.jakub.ApiBackendYWebApp.user.Permission.ADMIN_DELETE;
import static opalinski.jakub.ApiBackendYWebApp.user.Permission.ADMIN_READ;
import static opalinski.jakub.ApiBackendYWebApp.user.Permission.ADMIN_UPDATE;
import static opalinski.jakub.ApiBackendYWebApp.user.Permission.USER_CREATE;
import static opalinski.jakub.ApiBackendYWebApp.user.Permission.USER_DELETE;
import static opalinski.jakub.ApiBackendYWebApp.user.Permission.USER_READ;
import static opalinski.jakub.ApiBackendYWebApp.user.Permission.USER_UPDATE;

@RequiredArgsConstructor
public enum Role {

    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_DELETE,
                    ADMIN_CREATE,
                    USER_READ,
                    USER_UPDATE,
                    USER_DELETE,
                    USER_CREATE
            )
    ),
    USER(
            Set.of(
                    USER_READ,
                    USER_UPDATE,
                    USER_DELETE,
                    USER_CREATE
            )
    )

    ;

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
