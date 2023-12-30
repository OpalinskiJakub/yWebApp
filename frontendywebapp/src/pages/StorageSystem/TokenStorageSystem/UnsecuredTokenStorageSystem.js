class UnsecuredTokenStorageSystem {
    static #instance = null;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new this();
        }
        return this.#instance;
    }

    saveToken = (token) => {
        localStorage.setItem('UnsecuredUserToken', token);
    }

    getToken = () => {
        const savedUserData = localStorage.getItem('UnsecuredUserToken');
        return savedUserData;
    }

    removeToken = () => {
        localStorage.removeItem('UnsecuredUserToken');
    }

    isTokenValid = () => {
        const savedUserData = this.getToken();
        return savedUserData !== null;
    }
}

export default UnsecuredTokenStorageSystem;
