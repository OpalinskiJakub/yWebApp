
import {Card} from "react-bootstrap";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Post(){
    return (
        <Card className="mx-auto" style={{ width: '80%' }}>

            <Card.Body>
                Treść posta
            </Card.Body>


            <Card.Footer className="text-center">
                Komentarze
               
            </Card.Footer>
        </Card>
    );
};

export default Post;


