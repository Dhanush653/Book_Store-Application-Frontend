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

    forgetPassword(email) {
        return axios.post("http://localhost:8080/user/forget", { user_email: email } );
      }

    changePassword(change) {
        return axios.post("http://localhost:8080/user/change", change);
    }
    
    updateQuantity(cartId, quantity) {
        return axios.put(`http://localhost:8080/cart/updateQuantity/${cartId}/${quantity}`);
    }

    resetPassword(resetData) {
        return axios.post("http://localhost:8080/user/reset", resetData);
    }

    deleteCartItemsByUserId(userId) {
        return axios.delete(`http://localhost:8080/cart/removeByUser/${userId}`);
    }

    deleteCartItem(cartId) {
        return axios.delete(`http://localhost:8080/cart/remove/${cartId}`);
    }
}

const bookServiceInstance = new Bookservice();

export default bookServiceInstance;
