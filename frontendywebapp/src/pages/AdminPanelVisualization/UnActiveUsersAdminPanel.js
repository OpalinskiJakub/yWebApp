import {Component} from "react";
import {Button, Table} from "react-bootstrap";

class UnActiveUsersAdminPanel extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nazwa Użytkownika</th>
                    <th>Email</th>
                    <th>Wiek</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((user,index) =>
                    (<tr key={index}>
                        <th>{user.id}</th>
                        <th>{user.username}</th>
                        <th>{user.email}</th>
                        <th>{user.age}</th>
                        <th>
                            <Button variant="outline-primary">
                                Zablokuj
                            </Button>
                        </th>
                    </tr>))
                }


                </tbody>
            </Table>
        )
    }

}