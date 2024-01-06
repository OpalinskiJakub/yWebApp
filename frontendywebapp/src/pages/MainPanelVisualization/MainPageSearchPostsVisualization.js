import React, {Component} from "react";
import PostService from "../Authorisation/PostAuthorisation/PostService";
import Container from "react-bootstrap/Container";
import {Button, Card} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {withTranslation} from "react-i18next";

class MainPageSearchPostsVisualization extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
        this.postService = PostService.getInstance();
    }

    async componentDidMount() {
        const { searchValue } = this.props.params
        const response = await this.postService.validateGetExpectedPostsByName(searchValue);
        this.setState({
            posts: response,
        });
    }


    render() {
        const { t } = this.props;
        return (
            <Container>
                {this.state.posts.length >= 1 ?  (
                    this.state.posts.map((post, index) => (
                        <Card key={index} className="mx-auto" style={{ width: '80%', margin: '10px' }}>
                            <Card.Body>
                                <Card.Title>{post.ownerName}</Card.Title>
                                <Card.Text>{post.title}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Button variant="outline-primary" href={`/home/post/${post.id}`}>
                                    {t('postPreview')}
                                </Button>
                            </Card.Footer>
                        </Card>
                    ))
                ): null}
            </Container>
        );
    }

}

export default withTranslation('home')((props) => (
    <MainPageSearchPostsVisualization
        {...props}
        params={useParams()}
    />
));


