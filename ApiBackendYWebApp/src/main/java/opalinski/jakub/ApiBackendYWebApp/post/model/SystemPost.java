package opalinski.jakub.ApiBackendYWebApp.post.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import opalinski.jakub.ApiBackendYWebApp.post.comment.model.SystemComment;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

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
    @TextIndexed
    private String title;
    private String content;
    private Integer upvote;
    private Boolean reported;
    private List<SystemComment> systemCommentList;
    private List<String> upvoteUserId;
}

