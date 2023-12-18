import {Component} from "react";
import {Table} from "react-bootstrap";

class ReportAdminPanel extends Component {
    constructor() {
        super();
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
export default ReportAdminPanel;