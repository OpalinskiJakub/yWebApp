
package opalinski.jakub.ApiBackendYWebApp.post.comment.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Data
@NoArgsConstructor
@Document
@Builder
@AllArgsConstructor
public class SystemComment {
    @Id
    private String id;
    private String ownerId;
    private String ownerName;
    private String parentId;
    private Integer upvote;
    private String content;
    private List<String> upvoteUserId;
    private List<SystemComment> systemCommentList;
}
