
import {Card} from "react-bootstrap";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";


function Post(props){
    const post={
        id:1,
        title:"react",
        content:"javascript"
    }

    let cards=[]
    for(let i=0;i<100;i++) {
        cards.push(
        <Card className="mx-auto" style={{width: '80%',margin:'10px'}}>
            <Card.Body>
                <Card.Title>
                    <h4>{post.title}</h4>
                </Card.Title>
                <Card.Text>
                    <h6>{post.content}</h6>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Button variant="primary" href="post/${post.id}">Zobacz post</Button>
            </Card.Footer>
        </Card>
        );
    }
    return (
        <div>
            {cards}
        </div>

    );
};

export default Post;


