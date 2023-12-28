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




    getUserFromLocalStorage = () => {
        const storedUserJSON = localStorage.getItem('SessionUser');
        if (storedUserJSON) {
            return JSON.parse(storedUserJSON);
        }
        return null;
    }
}

export default SessionUserStorageSystem;