import User from "./User";

class UserBuilder {
    constructor() {
        this.user = new User(
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        );
    }

    setId = (id) => {
        this.user.id = id;
        return this;
    };

    setUsername = (username) => {
        this.user.username = username;
        return this;
    };

    setEmail = (email) => {
        this.user.email = email;
        return this;
    };

    setRole = (role) => {
        this.user.role = role;
        return this;
    };

    setActive = (active) => {
        this.user.active = active;
        return this;
    };

    setAge = (age) => {
        this.user.age = age;
        return this;
    };

    setDescription = (description) => {
        this.user.description = description;
        return this;
    };

    setAvatarURL = (avatarURL) => {
        this.user.avatar_URL = avatarURL;
        return this;
    };

    static Builder = () => {
        return new UserBuilder();
    };

    build = () => {
        return this.user;
    };
}

export default UserBuilder;
