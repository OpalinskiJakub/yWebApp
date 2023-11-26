import axios from "axios";
import Author from "./Model/Author";
import Post from "./Model/Post";
import Comment from "./Model/Comment";
import React from "react";
import PostIndexDB from "./PostIndexDB"
class PostApiConnector extends React.Component {
    static APIADDRESS = "http://localhost:8080/post1";
    async getPostById() {
        try {
            let response = await axios.get(PostApiConnector.APIADDRESS);
            let data = response.data;
            let store = new PostIndexDB();
            store.savePostToIndexedDB(data);
            //console.log(post);

        } catch (e) {
            console.error('Błąd pobierania danych:', e);
            throw e;
        }
    }
    render() {
        return (
            <div>
                <p>Test</p>
            </div>
        );
    }
}

const test = new PostApiConnector();

test.getPostById()
    .then((data) => {

    })
    .catch((error) => {
        console.error('Błąd:', error);
    });

export default PostApiConnector;
