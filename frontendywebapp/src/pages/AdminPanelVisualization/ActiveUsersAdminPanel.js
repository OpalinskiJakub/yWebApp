import {Component} from "react";
import {ListGroup,Table,Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import User from "../StorageSystem/UserPanel/Model/User";

class ActiveUsersAdminPanel extends Component{
    constructor(props) {
        super(props);
        this.state={
            users:[]
        }
    }

    componentDidMount() {
        let data =new User(1,'Jan','jan@o.pl','noAdmin',true,19,'https://123.pl');
        let data2 =new User(1,'Marek','jan@o.pl','noAdmin',true,20,'https://123.pl');
        let updatedUsers=[...this.state.users,data,data2];
        this.setState({users:updatedUsers});
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
        );
    }

}

export default ActiveUsersAdminPanel;