import axios from 'axios';
class Bookservice{
    loginUser(userData){
        return axios.post("http://localhost:8080/user/login",userData)
    }
    registerUser(){
        return axios.post("http://localhost:8080/user/registration")
    }

}

export default new Bookservice();