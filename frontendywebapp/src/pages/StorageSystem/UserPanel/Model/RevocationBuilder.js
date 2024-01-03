
import Revocation from "./Revocation";
class RevocationBuilder {
    constructor() {
        this.revocation = new Revocation('','','');
    }

    setId = (id) => {
        this.revocation.id = id;
        return this;
    }

    setEmail = (email) => {
        this.revocation.email = email;
        return this;
    }

    setContent = (content) => {
        this.revocation.content = content;
        return this;
    }

    static builder() {
        return new RevocationBuilder();
    }

    build = () => {
        return this.revocation;
    }
}
export default RevocationBuilder;