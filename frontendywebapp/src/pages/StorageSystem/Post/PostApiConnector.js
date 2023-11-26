import axios from "axios";

class PostApiConnector {
    static APIADDRESS = "http://localhost:8080/post";

    async getPostById() {
        try {
            let response = await axios.get(PostApiConnector.APIADDRESS);
            let data = response.data;
            console.log("Dane:", data);
            return data;
        } catch (e) {
            console.error('Błąd pobierania danych:', e);
            throw e;
        }
    }

}

const test = new PostApiConnector();

test.getPost()
    .then((data) => {
        console.log("Dane z then:", data);
    })
    .catch((error) => {
        console.error('Błąd:', error);
    });

export default PostApiConnector;
