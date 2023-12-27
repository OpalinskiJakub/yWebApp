package opalinski.jakub.ApiBackendYWebApp.user.service;

import lombok.RequiredArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.user.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.UserRepository;
import opalinski.jakub.ApiBackendYWebApp.user.controller.UserDataResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserDataResponse getUser(String id) {
        Optional<SystemUser> systemUser = userRepository.getSystemUserById(id);
        return systemUser.map(user -> UserDataResponse.builder().systemUser(user).build()).orElse(null);
    }

    public List<UserDataResponse> getAllUsers() {
        Optional<List<SystemUser>> systemUsers = userRepository.findAllByActive(true);
        return systemUsers.map(users -> users.stream().map(user -> UserDataResponse.builder().systemUser(user).build()).collect(Collectors.toList())).orElse(null);
    }
}
