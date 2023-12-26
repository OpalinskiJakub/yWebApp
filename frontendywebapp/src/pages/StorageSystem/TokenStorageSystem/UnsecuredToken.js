import axios from "axios";
import Cookies from 'js-cookie';
class UnsecuredToken{
    static #instance = new UnsecuredToken();

    #constructor() {
    }

    static getInstance(){
        return this.#instance;
    }

    saveToken(token){
        Cookies.set('UnsecuredUserToken',token);
        console.log('Dane zostały zapisane w pliku cookie.');
    }

    getToken(){
        const savedUserData = Cookies.get('UnsecuredUserToken');
        console.log(savedUserData);
    }

    removeToken(){
        Cookies.remove('UnsecuredUserToken');
    }


}
export default UnsecuredToken;