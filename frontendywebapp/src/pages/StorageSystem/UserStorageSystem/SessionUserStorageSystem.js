import UserBuilder from "../UserPanel/Model/UserBuilder";

class SessionUserStorageSystem {
    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }

    saveUserToLocalStorage = (user) => {
        const userJSON = JSON.stringify(user);
        localStorage.setItem('SessionUser', userJSON);
    }

    #isAlive(){
        const storedUserJSON = localStorage.getItem('SessionUser');
        if(storedUserJSON==null){
            return false;
        }else {
            return true;
        }
    }


    getUserFromLocalStorage = () => {
        if(!this.#isAlive()){
            return null;
        }
        const storedUserJSON = JSON.parse(localStorage.getItem('SessionUser'));
        let user = UserBuilder.Builder()
            .setId(storedUserJSON._id)
            .setUsername(storedUserJSON._username)
            .setEmail(storedUserJSON._email)
            .setRole(storedUserJSON._role)
            .setActive(storedUserJSON._active)
            .setAge(storedUserJSON._age)
            .setDescription(storedUserJSON._description)
            .setAvatarURL(storedUserJSON._avatar_URL)
            .build();
        return user;
    }

    isAdmin = () => {
        if(!this.#isAlive()){
            return false;
        }
        const storedUserJSON = JSON.parse(localStorage.getItem('SessionUser'));
        if(storedUserJSON._role=="ADMIN"){
            return true;
        }else {
            return true;
        }
    }
}

export default SessionUserStorageSystem;