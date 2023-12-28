package opalinski.jakub.ApiBackendYWebApp.user.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.auth.model.AuthenticationRequest;
import opalinski.jakub.ApiBackendYWebApp.user.model.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.UserRepository;
import opalinski.jakub.ApiBackendYWebApp.user.model.UserDataResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserDataResponse getUser(String id) {
        Optional<SystemUser> systemUser = userRepository.findUserById(id);
        return systemUser.map(UserDataResponse::new).orElse(null);
    }

    public List<UserDataResponse> getAllUsers() {
        Optional<List<SystemUser>> systemUsers = userRepository.findAllByActive(true);
        return systemUsers.map(users -> users.stream().map(UserDataResponse::new).collect(Collectors.toList())).orElse(null);
    }

    public UserDataResponse updateUser(String userId, SystemUser user) {
        Optional<SystemUser> optionalSystemUser = userRepository.findUserById(userId);

        if (optionalSystemUser.isEmpty()) {
            return null;
        }

        SystemUser existingUser = optionalSystemUser.get();
        existingUser.setAge(user.getAge() != null ? user.getAge() : existingUser.getAge());
        existingUser.setUsername(user.getUsername() != null ? user.getUsername() : existingUser.getUsername());
        existingUser.setDescription(user.getDescription() != null ? user.getDescription() : existingUser.getDescription());
        existingUser.setEmail(user.getEmail() != null ? user.getEmail() : existingUser.getEmail());
        existingUser.setActive(user.getActive() != null ? user.getActive() : existingUser.getActive());
        existingUser.setAvatarUrl(user.getAvatarUrl() != null ? user.getAvatarUrl() : existingUser.getAvatarUrl());
        existingUser.setRole(user.getRole() != null ? user.getRole() : existingUser.getRole());
        logger.info(String.valueOf(user));
        if (user.getPassword() != null) {
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        userRepository.save(existingUser);
        return new UserDataResponse(existingUser);
    }

    public boolean checkUser(AuthenticationRequest request){
        Optional<SystemUser> systemUser = userRepository.findSystemUserByEmailAndActiveFalse(request.getEmail());
        return systemUser.isPresent();
    }

}
