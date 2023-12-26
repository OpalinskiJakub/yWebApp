import Dexie from "dexie";

import Post from "./Model/Post";
import PostApiConnector from "../../ApiServices/PostRequests/PostApiConnector";
import comment from "./Model/Comment";
const db = new Dexie('postIndexDB');



db.version(1).stores({
    posts: 'postId, title, content, author, comments'
});
db.open().catch(err => {
    console.error(err.stack || err);
});
class PostIndexDB {
    savePostToIndexedDB(data) {
        db.transaction('rw', db.posts, async () => {
            await db.posts.put({
                postId: data.postId,
                title: data.title,
                content: data.content,
                author: data.author,
                comments: data.comments
            });
        }).catch(err => {
            console.error("Error during sending data to postIndexDB",err);
        });
    }
    async _fetchDataFromIndexedDB() {
        const postsData = await db.posts.toArray();

        return postsData;
    }

    async mapPostsDataToPosts() {
        return new Promise((resolve, reject) => {
            this._fetchDataFromIndexedDB()
                .then((data) => {
                    const posts = data.map(post => new Post(
                        post.postId,
                        post.title,
                        post.content,
                        post.author,
                        post.comments
                    ));
                    resolve(posts);
                })
                .catch((error) => {
                    console.error('Error during fetching data from IndexedDB:', error);
                    reject(error);
                });
        });
    }

};

export default PostIndexDB;