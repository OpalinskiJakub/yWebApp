import React, {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";
import PostPanelComment from "./PostPanelComment";
import PostIndexDB from "../StorageSystem/PostPanel/PostIndexDB";
import data from "bootstrap/js/src/dom/data";
import PostApiConnector from "../ApiServices/PostRequests/PostApiConnector";

global.Api = new PostApiConnector();


class PostPanel extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title:'',
            author:'',
            content:'',
            comments: [],
            newComment: ''
        };
    }
    async componentDidMount() {
        try {
            await global.Api.getPostById();
            let db = await global.Api.getDb();
            //let result = await db.mapPostsDataToPosts();
            let result={"postId":1,"title":"Post nr 1","content":"Post o reakcie","author":{"userId":1,"name":"Jan","surname":"Kowalski"},"comments":[{"commentId":1,"author":{"userId":1,"name":"Jan","surname":"Kowalski"},"content":"Komentarz glowny #1","answers":[{"commentId":3,"author":{"userId":3,"name":"Krzysztof","surname":"Krakowski"},"content":"Odpowiedz do komentarza #1 #1","answers":[]},{"commentId":3,"author":{"userId":3,"name":"Krzysztof","surname":"Krakowski"},"content":"Odpowiedz do komentarza #1 #2","answers":[{"commentId":3,"author":{"userId":3,"name":"Krzysztof","surname":"Krakowski"},"content":"Odpowiedz do komentarza #1 #1","answers":[{"commentId":3,"author":{"userId":3,"name":"Krzysztof","surname":"Krakowski"},"content":"Odpowiedz do komentarza #1 #1","answers":[{"commentId":3,"author":{"userId":3,"name":"Krzysztof","surname":"Krakowski"},"content":"Odpowiedz do komentarza #1 #1","answers":[{"commentId":3,"author":{"userId":3,"name":"Krzysztof","surname":"Krakowski"},"content":"Odpowiedz do komentarza #1 #1","answers":[{"commentId":3,"author":{"userId":3,"name":"Krzysztof","surname":"Krakowski"},"content":"Odpowiedz do komentarza #1 #1","answers":[{"commentId":4,"author":{"userId":2,"name":"Marek","surname":"Mazowiecki"},"content":"Odpowiedz do komentarza #1 #2","answers":[]}]}]}]}]}]}]}]},{"commentId":2,"author":{"userId":2,"name":"Marek","surname":"Mazowiecki"},"content":"Kometarz glowny #2","answers":[{"commentId":5,"author":{"userId":1,"name":"Jan","surname":"Kowalski"},"content":"Odpowiedz do komentarza #2","answers":[]}]}]}
            result = result;
            this.setState({author:result.author.name})
            this.setState({ title: result.title});
            this.setState({ content: result.content});
            this.setState({comments:result.comments})

        } catch (error) {

            console.error('Error during mapping posts data:', error);
        }
    }
    handleAddComment = () => {

    };



    render() {
        return (
            <Card data-bs-theme="dark" className="m-3">
                <Card.Title>
                    <Card className="m-3" style={{ padding: 10 }} >
                        <Card.Title >
                            {this.state.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.state.author}</Card.Subtitle>
                        <Card.Text>
                            {this.state.content}
                        </Card.Text>
                    </Card>
                </Card.Title>
                <Card.Body>
                    <Card className="m-3" style={{ padding: 10 }} >
                        <Card.Title >
                            Komentarze:
                        </Card.Title>
                        <Card.Text>
                            {this.state.comments.map((comment, index) => (
                                <PostPanelComment key={index} comment={comment} />
                            ))}
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Dodaj komentarz..."
                                    value={this.state.newComment}
                                    onChange={(e) => this.setState({ newComment: e.target.value })}
                                />
                            </Form.Group>
                            <Button variant="outline-primary" onClick={this.handleAddComment} style={{padding:4 ,fontSize:15, marginTop:10}}>
                                Dodaj Komentarz
                            </Button>
                        </Card.Text>
                    </Card>
                </Card.Body>
            </Card>
        );
    }
}

export default PostPanel;
