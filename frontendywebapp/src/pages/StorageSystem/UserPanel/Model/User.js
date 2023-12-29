class User {
    constructor(id, username, email, role, active, age, description, avatar_URL) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._role = role;
        this._active = active;
        this._age = age;
        this._description = description;
        this._avatar_URL = avatar_URL;
    }


    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }

    get active() {
        return this._active;
    }

    set active(value) {
        this._active = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get avatar_URL() {
        return this._avatar_URL;
    }

    set avatar_URL(value) {
        this._avatar_URL = value;
    }

    get id() {
        return this._id;
    }


    set id(newId) {
        this._id = newId;
    }

    get username() {
        return this._username;
    }


    set username(newUsername) {
        this._username = newUsername;
    }


}



export default User;
