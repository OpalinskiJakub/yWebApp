import {Component} from "react";
import {Button, Table} from "react-bootstrap";

class PostsAdminPanel extends Component{
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }
    }

    componentDidMount() {

    }


    render() {
        return(
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Id komentarza</th>
                    <th>Id posta</th>
                    <th>Autor komentarza</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>



                </tbody>
            </Table>
        )
    }

}
export default PostsAdminPanel;