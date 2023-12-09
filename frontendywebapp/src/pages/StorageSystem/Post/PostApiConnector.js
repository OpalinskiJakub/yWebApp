import axios from "axios";
import React from "react";
import PostIndexDB from "./PostIndexDB";



class PostApiConnector extends React.Component {
    static APIADDRESS = "http://localhost:8080/post1";

    constructor(props) {
        super(props);
        this.db = new PostIndexDB();
    }

    getDb(){
        return this.db;
    }

    async _sendRequest(address) {
            let response = await axios.get(address);
            return response.data;
    }

    getPostById(){
        this._sendRequest(PostApiConnector.APIADDRESS)
            .then((data) => {
                this.db.savePostToIndexedDB(data);
                this.db.mapPostsDataToPosts();

            })
            .catch((error) => {
                console.error("Error during fetching data from API:", error);
            });

    }

    componentDidMount() {
        this.getPostById();
    }

    render() {
        return (
            <div>
                <p>Test</p>
            </div>
        );
    }
}

export default PostApiConnector;
