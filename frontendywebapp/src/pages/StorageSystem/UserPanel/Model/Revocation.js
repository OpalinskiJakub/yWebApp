class Revocation {
    constructor(id, email, content) {
        this._id = id;
        this._email = email;
        this._content = content;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
}

export default Revocation;