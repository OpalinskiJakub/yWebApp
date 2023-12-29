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
        console.log(userJSON);
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
        return storedUserJSON;
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