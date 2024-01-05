package opalinski.jakub.ApiBackendYWebApp.auth.github.util;

public class GithubBerear {
    public static String retrieveToken(String token) {
        int startIndex = token.indexOf("access_token=") + "access_token=".length();
        int endIndex = token.indexOf("&", startIndex);

        return token.substring(startIndex, endIndex);
    }
}
