package opalinski.jakub.ApiBackendYWebApp.post.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostDataResponse {

    public PostDataResponse (SystemPost systemPost){
        this.id = systemPost.getId();
        this.ownerId = systemPost.getOwnerId();
        this.ownerName = systemPost.getOwnerName();
        this.title = systemPost.getTitle();
        this.upvote = systemPost.getUpvote();
    }

    public PostDataResponse (TitleRequest systemPost){
        this.title = systemPost.getTitle();
    }

    private String id;
    private String ownerId;
    private String ownerName;
    private String title;
    private Integer upvote;
}
