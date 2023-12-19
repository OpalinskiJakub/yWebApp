import {Component} from "react";
import {Table} from "react-bootstrap";

class CommentsAdminPanel extends Component{
    constructor(props) {
        super(props);

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
export default CommentsAdminPanel;