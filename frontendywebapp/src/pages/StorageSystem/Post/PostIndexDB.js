import Dexie from "dexie";

import Post from "./Model/Post";
const db = new Dexie('postIndexDB');


db.version(1).stores({
    posts: 'postId, name, content, author, comments'
});
db.open().catch(err => {
    console.error(err.stack || err);
});
class PostIndexDB {
    savePostToIndexedDB(data) {
        db.transaction('rw', db.posts, async () => {

            await db.posts.add({
                postId: data.postId,
                name: data.name,
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

     async mapPostsDataToPosts(){
        let post;
            this._fetchDataFromIndexedDB()
                .then((data) => {
                        post = data.map(post => new Post(post.postId,
                            post.name,
                            post.content,
                            post.author, post.comments))



                        }

                ).catch((error) => {
                    console.error('Error during fetching data from IndexedDB:', error);
                });
    }


};

export default PostIndexDB;