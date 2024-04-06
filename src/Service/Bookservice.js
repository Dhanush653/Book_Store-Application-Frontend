// import axios from 'axios';
// class Bookservice{
//     loginUser(userData){
//         return axios.post("http://localhost:8080/user/login",userData)
//     }
//     registerUser(){
//         return axios.post("http://localhost:8080/user/registration")
//     }
//     generateUserByToken(){
//         return axios.get("http://localhost:8080/user/details")
//     }

// }

// export default new Bookservice();


import axios from 'axios';

class Bookservice {
    loginUser(userData) {
        return axios.post("http://localhost:8080/user/login", userData);
    }

    registerUser(formData) {
        return axios.post("http://localhost:8080/user/registration", formData);
    }

    generateUserByToken(token) {
        return axios.get("http://localhost:8080/user/details", {
            headers: {
                'token': token
            }
        });
    }
}

const bookServiceInstance = new Bookservice();

export default bookServiceInstance;


