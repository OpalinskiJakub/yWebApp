class User {
    constructor(id, username, email, role, active, age, description, avatar_URL) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
        this.active = active;
        this.age = age;
        this.description = description;
        this.avatar_URL = avatar_URL;
    }

    static createUserWithOnlyEmail(email) {
        return new User(null, null, email, null, null, null, null, null);
    }
}

export default User;
