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

    fetchCartItems(userId) {
        return axios.get(`http://localhost:8080/cart/allForUser/${userId}`);
    }

    fetchBookDetails(bookId) {
        return axios.get(`http://localhost:8080/book/${bookId}`);
    }
    
    placeOrder(orderDTO) {
        return axios.post("http://localhost:8080/order/orderplace", orderDTO);
    }
}

const bookServiceInstance = new Bookservice();

export default bookServiceInstance;
