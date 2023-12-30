package opalinski.jakub.ApiBackendYWebApp.post.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document
@Builder
@AllArgsConstructor
public class SystemPost {
    @Id
    private String id;
    private String ownerId;
    private String ownerName;
    @Indexed(unique = true)
    private String title;
    private String content;
    private Integer upvote;
    private Boolean reported;
}

