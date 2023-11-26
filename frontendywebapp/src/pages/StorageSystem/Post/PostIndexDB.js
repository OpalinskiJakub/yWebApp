import Dexie from "dexie";
const db = new Dexie('postIndexDB');

db.version(1).stores({
    posts: 'postId, name, content, author, comments'
});
db.open().catch(err => {
    console.error(err.stack || err);
});
class PostIndexDB {
    savePostToIndexedDB(data) {
        console.log(data);
        db.transaction('rw', db.posts, async () => {

            await db.posts.add({
                postId: data.postId,
                name: data.name,
                content: data.content,
                author: data.author,
                comments: data.comments
            });
        }).catch(err => {
            console.error(err.stack || err);
        });
    }
};

export default PostIndexDB;