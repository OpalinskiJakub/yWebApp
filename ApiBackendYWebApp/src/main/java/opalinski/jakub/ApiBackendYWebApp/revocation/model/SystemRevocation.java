package opalinski.jakub.ApiBackendYWebApp.revocation.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document
@Builder
@AllArgsConstructor
public class SystemRevocation {
    @Id
    private String id;
    private String email;
    private String content;
}
