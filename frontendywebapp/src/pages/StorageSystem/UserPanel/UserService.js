import React, { Component } from "react";
import UserApiConnector from "./Api/UserApiConnector";
import UserIndexDb from "./Db/UserIndexDb";

class UserService extends Component {
    constructor(props) {
        super(props);
        this.api = new UserApiConnector();
        this.db = new UserIndexDb();
    }

    async add() {
        let data = await this.api.getUserFromApi(1);
        await this.db.saveRawUserToDb(data);
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