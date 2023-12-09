import React, { Component } from "react";
import UserApiConnector from "./Api/UserApiConnector";
import UserIndexDb from "./Db/UserIndexDb";
import User from "./Model/User";

class UserService extends Component {
    constructor(props) {
        super(props);
        this.api = new UserApiConnector();
        this.db = new UserIndexDb();
    }

    async add() {
        let data = await this.api.getUserFromApi(1);
        await this.db.saveRawUserToDb(data);
        let rowUserData = await this.db.getUserFromDb();
        rowUserData=rowUserData[0];
        let user = new User(
            rowUserData.id,
            rowUserData.username,
            rowUserData.email,
            rowUserData.role,
            rowUserData.active,
            rowUserData.age,
            rowUserData.description,
            rowUserData.avatar_URL)
        console.log(user);
    }

    async componentDidMount() {
        this.add();
    }

    render() {
        return (
            <p>Test</p>
        )
    }
}

export default UserService;