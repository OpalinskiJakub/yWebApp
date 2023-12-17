package opalinski.jakub.ApiBackendYWebApp;

import opalinski.jakub.ApiBackendYWebApp.user.Role;
import opalinski.jakub.ApiBackendYWebApp.user.SystemUser;
import opalinski.jakub.ApiBackendYWebApp.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ApiBackendYWebAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiBackendYWebAppApplication.class, args);
	}

}
