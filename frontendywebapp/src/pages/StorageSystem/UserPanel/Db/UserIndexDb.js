import Dexie from "dexie";

class UserIndexDb {
    static instance = null;

    constructor() {
        if (UserIndexDb.instance) {
            return UserIndexDb.instance;
        }

        this.db = new Dexie('userIndexDB');
        this.db.version(1).stores({
            user: '&id,username,email,role,active,age,description,avatar_URL'
        });

        this.db.open().catch(err => {
            console.error(err.stack || err);
        });

        UserIndexDb.instance = this;
    }

    async saveRawUserToDb(data) {
        try {
            await this.db.user.add({
                id:data.id,
                username:data.username,
                email:data.email,
                role:data.role,
                active:data.active,
                age:data.age,
                description:data.description,
                avatar_URL:data.avatar_URL
            });
            console.log("User added to database");
        } catch (error) {
            console.error("Error saving user to database:", error);
        }
    }

}

export default UserIndexDb;
