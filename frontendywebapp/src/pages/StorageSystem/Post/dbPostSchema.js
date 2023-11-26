import Dexie from "dexie";

const db = new Dexie('postDB');

db.version(1).stores({
    post: 'id, name, age'
});
export default db;